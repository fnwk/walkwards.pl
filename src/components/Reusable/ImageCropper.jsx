import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cropper from 'react-easy-crop';
import useFetch from '../../hooks/useFetch';
import { avatarChangeAction } from '../../store/avatarChange';

const ImageCropper = ({ img, exit, type, changeImg }) => {
  const dispatch = useDispatch();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const setNewAvatar = useFetch(
    'https://backend.walkwards.pl/User/SetNewAvatar',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: useSelector((state) => state.userData.token),
        id: useSelector((state) => state.userData.id),
        newAvatar: croppedImage !== null && croppedImage.split(',')[1],
      }),
    }
  );

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
      image.src = url;
    });

  const getRadianAngle = (degreeValue) => {
    return (degreeValue * Math.PI) / 180;
  };

  const rotateSize = (width, height, rotation) => {
    const rotRad = getRadianAngle(rotation);

    return {
      width:
        Math.abs(Math.cos(rotRad) * width) +
        Math.abs(Math.sin(rotRad) * height),
      height:
        Math.abs(Math.sin(rotRad) * width) +
        Math.abs(Math.cos(rotRad) * height),
    };
  };

  const getCroppedImg = async (
    imageSrc,
    pixelCrop,
    rotation = 0,
    flip = { horizontal: false, vertical: false }
  ) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return null;
    }

    const rotRad = getRadianAngle(rotation);

    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
      image.width,
      image.height,
      rotation
    );

    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-image.width / 2, -image.height / 2);

    ctx.drawImage(image, 0, 0);

    const data = ctx.getImageData(
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height
    );

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(data, 0, 0);
    return canvas.toDataURL();
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(img, croppedAreaPixels);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  useEffect(async () => {
    if (croppedImage !== null) {
      console.log('test', type);
      if (type === 'user') {
        const newAvatarResponse = await setNewAvatar.sendRequest();
        if (newAvatarResponse.status === 200) {
          dispatch(avatarChangeAction.avatarChange());
          exit();
        }
      } else if (type === 'guild') {
        changeImg(croppedImage);
        console.log('ich bin da!');
        exit();
      }
    }
  }, [croppedImage]);

  return (
    <div className='z-40 w-full h-full fixed'>
      <Cropper
        image={img}
        crop={crop}
        zoom={zoom}
        showGrid={false}
        cropShape='round'
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <button
        onClick={showCroppedImage}
        className='w-28 py-2 z-50 text-white shadow-md rounded-md bg-wwGreenF border-2 border-wwGreenF right-8 bottom-20 fixed'>
        Zapisz
      </button>
      <button
        onClick={exit}
        className='w-28 py-2 z-50 text-wwGreenF shadow-md rounded-md bg-white border-2 border-wwGreenF right-8 bottom-6 fixed'>
        Wyjdź
      </button>
    </div>
  );
};

export default ImageCropper;
