import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { notificationsAction } from '../store/notifications';
import useFetch from './useFetch';

const useGetNotification = () => {
  const dispatch = useDispatch();

  const notificationsReq = useFetch(
    'https://backend.walkwards.pl/Notification/GetNotifications',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: useSelector((state) => state.userData.id),
        token: useSelector((state) => state.userData.token),
        page: 0,
        getAll: false,
      }),
    }
  );

  const notifications = async () => {
    const notificationsResponse = await notificationsReq.sendRequest();
    const notificationsData = await notificationsResponse.json();

    dispatch(notificationsAction.notifications(notificationsData));
  };

  return { notifications };
};

export default useGetNotification;
