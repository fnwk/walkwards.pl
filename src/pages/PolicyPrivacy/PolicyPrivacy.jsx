const PolicyPrivacy = () => {
  return (
    <div>
      <style
        type='text/css'
        dangerouslySetInnerHTML={{
          __html:
            "\n\nbody {margin-top: 0px;margin-left: 0px;}\n\n#page_1 {position:relative; overflow: hidden;padding: 0px;border: none;width: 700px;}\n#page_1 #id1_1 {border:none;margin: 0px 0px 0px 0px;padding: 0px;border:none;width: 700px;overflow: hidden;}\n#page_1 #id1_2 {border:none;margin: 56px 0px 0px 586px;padding: 0px;border:none;width: 114px;overflow: hidden;}\n\n\n\n\n\n#page_2 {position:relative; overflow: hidden;margin: 91px 0px 36px 94px;padding: 0px;border: none;width: 700px;}\n#page_2 #id2_1 {border:none;margin: 0px 0px 0px 0px;padding: 0px;border:none;width: 700px;overflow: hidden;}\n#page_2 #id2_2 {border:none;margin: 72px 0px 0px 586px;padding: 0px;border:none;width: 114px;overflow: hidden;}\n\n\n\n\n\n#page_3 {position:relative; overflow: hidden;margin: 91px 0px 36px 94px;padding: 0px;border: none;width: 700px;}\n#page_3 #id3_1 {border:none;margin: 0px 0px 0px 0px;padding: 0px;border:none;width: 700px;overflow: hidden;}\n#page_3 #id3_2 {border:none;margin: 54px 0px 0px 586px;padding: 0px;border:none;width: 114px;overflow: hidden;}\n\n\n\n\n\n#page_4 {position:relative; overflow: hidden;margin: 88px 0px 36px 94px;padding: 0px;border: none;width: 700px;}\n#page_4 #id4_1 {border:none;margin: 0px 0px 0px 0px;padding: 0px;border:none;width: 700px;overflow: hidden;}\n#page_4 #id4_2 {border:none;margin: 40px 0px 0px 586px;padding: 0px;border:none;width: 114px;overflow: hidden;}\n\n\n\n\n\n#page_5 {position:relative; overflow: hidden;margin: 91px 0px 36px 94px;padding: 0px;border: none;width: 700px;}\n#page_5 #id5_1 {border:none;margin: 0px 0px 0px 0px;padding: 0px;border:none;width: 605px;overflow: hidden;}\n#page_5 #id5_2 {border:none;margin: 704px 0px 0px 586px;padding: 0px;border:none;width: 114px;overflow: hidden;}\n\n\n\n\n\n.ft0{font: bold 16px 'Arial';line-height: 19px;}\n.ft1{font: 16px 'Arial';line-height: 18px;}\n.ft2{font: 16px 'Arial';margin-left: 7px;line-height: 24px;}\n.ft3{font: 16px 'Arial';line-height: 24px;}\n.ft4{font: 16px 'Arial';margin-left: 10px;line-height: 25px;}\n.ft5{font: 16px 'Arial';line-height: 25px;}\n.ft6{font: 16px 'Arial';margin-left: 6px;line-height: 24px;}\n.ft7{font: 16px 'Arial';margin-left: 7px;line-height: 25px;}\n.ft8{font: bold 16px 'Arial';margin-left: 5px;line-height: 19px;}\n.ft9{font: bold 16px 'Arial';line-height: 27px;}\n.ft10{font: 16px 'Arial';line-height: 26px;}\n.ft11{font: 16px 'Arial';margin-left: 5px;line-height: 35px;}\n.ft12{font: 16px 'Arial';line-height: 35px;}\n.ft13{font: 16px 'Arial';margin-left: 5px;line-height: 18px;}\n.ft14{font: 16px 'Arial';margin-left: 4px;line-height: 18px;}\n.ft15{font: 16px 'Arial';margin-left: 9px;line-height: 27px;}\n.ft16{font: 16px 'Arial';line-height: 27px;}\n.ft17{font: italic 13px 'Arial';color: #909090;line-height: 16px;}\n.ft18{font: 16px 'Arial';margin-left: 9px;line-height: 23px;}\n.ft19{font: 16px 'Arial';line-height: 23px;}\n.ft20{font: 16px 'Arial';margin-left: 6px;line-height: 26px;}\n.ft21{font: bold 16px 'Arial';line-height: 24px;}\n.ft22{font: 16px 'Arial';margin-left: 9px;line-height: 25px;}\n.ft23{font: 16px 'Arial';margin-left: 8px;line-height: 26px;}\n.ft24{font: 16px 'Arial';margin-left: 6px;line-height: 23px;}\n.ft25{font: 16px 'Arial';margin-left: 7px;line-height: 23px;}\n.ft26{font: 16px 'Arial';margin-left: 6px;line-height: 18px;}\n.ft27{font: 16px 'Arial';line-height: 22px;}\n.ft28{font: 16px 'Arial';margin-left: 5px;line-height: 26px;}\n\n.p0{text-align: left;padding-left: 201px;margin-top: 0px;margin-bottom: 0px;}\n.p1{text-align: left;padding-left: 137px;margin-top: 3px;margin-bottom: 0px;}\n.p2{text-align: justify;padding-right: 95px;margin-top: 61px;margin-bottom: 0px;}\n.p3{text-align: justify;padding-right: 95px;margin-top: 7px;margin-bottom: 0px;}\n.p4{text-align: justify;padding-right: 95px;margin-top: 9px;margin-bottom: 0px;}\n.p5{text-align: left;padding-left: 135px;margin-top: 29px;margin-bottom: 0px;}\n.p6{text-align: left;padding-right: 95px;margin-top: 41px;margin-bottom: 0px;}\n.p7{text-align: left;padding-left: 112px;margin-top: 29px;margin-bottom: 0px;}\n.p8{text-align: left;padding-left: 30px;padding-right: 238px;margin-top: 36px;margin-bottom: 0px;text-indent: -30px;}\n.p9{text-align: left;margin-top: 13px;margin-bottom: 0px;}\n.p10{text-align: left;padding-left: 30px;margin-top: 21px;margin-bottom: 0px;}\n.p11{text-align: justify;padding-right: 95px;margin-top: 21px;margin-bottom: 0px;}\n.p12{text-align: left;margin-top: 0px;margin-bottom: 0px;}\n.p13{text-align: justify;padding-right: 95px;margin-top: 0px;margin-bottom: 0px;}\n.p14{text-align: justify;padding-right: 95px;margin-top: 32px;margin-bottom: 0px;}\n.p15{text-align: left;padding-left: 222px;margin-top: 31px;margin-bottom: 0px;}\n.p16{text-align: left;padding-left: 30px;margin-top: 8px;margin-bottom: 0px;}\n.p17{text-align: left;padding-left: 60px;margin-top: 20px;margin-bottom: 0px;}\n.p18{text-align: left;padding-left: 60px;margin-top: 4px;margin-bottom: 0px;}\n.p19{text-align: left;padding-left: 30px;margin-top: 22px;margin-bottom: 0px;}\n.p20{text-align: left;padding-left: 60px;margin-top: 21px;margin-bottom: 0px;}\n.p21{text-align: left;padding-left: 39px;margin-top: 43px;margin-bottom: 0px;}\n.p22{text-align: justify;padding-right: 95px;margin-top: 40px;margin-bottom: 0px;}\n.p23{text-align: left;padding-right: 95px;margin-top: 7px;margin-bottom: 0px;}\n.p24{text-align: left;padding-left: 118px;margin-top: 54px;margin-bottom: 0px;}\n.p25{text-align: justify;padding-right: 95px;margin-top: 8px;margin-bottom: 0px;}\n.p26{text-align: justify;padding-right: 95px;margin-top: 25px;margin-bottom: 0px;}\n.p27{text-align: justify;padding-right: 95px;margin-top: 4px;margin-bottom: 0px;}\n.p28{text-align: left;margin-top: 7px;margin-bottom: 0px;}\n.p29{text-align: left;padding-right: 95px;margin-top: 15px;margin-bottom: 0px;}\n.p30{text-align: left;padding-left: 88px;margin-top: 31px;margin-bottom: 0px;}\n.p31{text-align: left;padding-left: 38px;margin-top: 31px;margin-bottom: 0px;}\n.p32{text-align: justify;margin-top: 7px;margin-bottom: 0px;}\n.p33{text-align: left;margin-top: 8px;margin-bottom: 0px;}\n\n\n\n\n",
        }}
      />
      <div id='page_1' style={{ margin: 'auto' }}>
        <div id='id1_1'>
          <p className='p0 ft0'>POLITYKA PRYWATNO??CI</p>
          <p className='p1 ft0'>STRONY INTERNETOWEJ WALKWARDS.PL</p>
          <p className='p2 ft3'>
            <span className='ft1'>1.</span>
            <span className='ft2'>
              Dla W??a??ciciela niniejszej strony internetowej, ochrona danych
              osobowych U??ytkownik??w jest spraw?? najwy??szej wagi. Dok??ada on
              ogrom stara??, aby U??ytkownicy czuli si?? bezpiecznie, powierzaj??c
              swoje dane osobowe w trakcie korzystania ze strony internetowej.
            </span>
          </p>
          <p className='p3 ft5'>
            <span className='ft1'>2.</span>
            <span className='ft4'>
              U??ytkownik to osoba ???zyczna, osoba prawna albo jednostka
              organizacyjna nieposiadaj??ca osobowo??ci prawnej, kt??rej ustawa
              przyznaje zdolno???? prawn??, korzystaj??ca z us??ug elektronicznych
              dost??pnych w ramach strony internetowej.
            </span>
          </p>
          <p className='p3 ft3'>
            <span className='ft1'>3.</span>
            <span className='ft6'>
              Niniejsza polityka prywatno??ci wyja??nia zasady i zakres
              przetwarzania danych osobowych U??ytkownika, przys??uguj??ce mu
              prawa, jak te?? obowi??zki administratora tych danych, a tak??e
              informuje o u??ywaniu plik??w cookies.
            </span>
          </p>
          <p className='p4 ft5'>
            <span className='ft1'>4.</span>
            <span className='ft7'>
              Administrator stosuje najnowocze??niejsze ??rodki techniczne i
              rozwi??zania organizacyjne, zapewniaj??ce wysoki poziom ochrony
              przetwarzanych danych osobowych oraz zabezpieczenia przed dost??pem
              os??b nieupowa??nionych.
            </span>
          </p>
          <p className='p5 ft0'>
            <span className='ft0'>I.</span>
            <span className='ft8'>ADMINISTRATOR DANYCH OSOBOWYCH</span>
          </p>
          <p className='p6 ft10'>
            Administratorem danych osobowych jest Pan Kacper Adamczyk,
            zamieszka??y przy: os.Szymanowskiego 5/10 <nobr>32-020</nobr>{' '}
            Wieliczka (zwany dalej: ???<span className='ft9'>W??a??ciciel</span>").
          </p>
          <p className='p7 ft0'>
            <span className='ft0'>II.</span>
            <span className='ft8'>CEL PRZETWARZANIA DANYCH OSOBOWYCH</span>
          </p>
          <p className='p8 ft12'>
            <span className='ft1'>1.</span>
            <span className='ft11'>
              Administrator przetwarza dane osobowe U??ytkownika w celu:
              Prawid??owego dzia??ania wszystkich funkcji aplikacji.
            </span>
          </p>
          <p className='p9 ft1'>
            <span className='ft1'>2.</span>
            <span className='ft13'>
              Oznacza to, ??e dane te s?? potrzebne w szczeg??lno??ci do
            </span>
          </p>
          <p className='p10 ft1'>
            <span className='ft1'>a.</span>
            <span className='ft14'>
              zarejestrowania si?? na stronie internetowej;
            </span>
          </p>
          <p className='p10 ft1'>
            <span className='ft1'>b.</span>
            <span className='ft13'>odbioru wygranych nagr??d</span>
          </p>
          <p className='p11 ft16'>
            <span className='ft1'>3.</span>
            <span className='ft15'>
              U??ytkownik mo??e r??wnie?? wyrazi?? zgod?? na otrzymywanie informacji o
              nowo??ciach i promocjach, co spowoduje, ??e administrator b??dzie
              r??wnie??
            </span>
          </p>
        </div>
        <div id='id1_2'>
          <p className='p12 ft17'>1/5</p>
        </div>
      </div>
      <div id='page_2' style={{ margin: 'auto' }}>
        <div id='id2_1'>
          <p className='p13 ft5'>
            przetwarza?? dane osobowe w celu przesy??ania U??ytkownikowi informacji
            handlowych dotycz??cych m.in. nowych produkt??w lub us??ug, promocji
            czy wyprzeda??y.
          </p>
          <p className='p14 ft3'>
            <span className='ft1'>4.</span>
            <span className='ft2'>
              Dane osobowe s?? r??wnie?? przetwarzane w ramach wype??nienia prawnych
              obowi??zk??w ci??????cych na administratorze danych oraz realizacji
              zada?? w interesie publicznym m.in. do wykonywania zada?? zwi??zanych
              z bezpiecze??stwem i obronno??ci?? lub przechowywaniem dokumentacji
              podatkowej.
            </span>
          </p>
          <p className='p3 ft19'>
            <span className='ft1'>5.</span>
            <span className='ft18'>
              Dane osobowe mog?? by?? r??wnie?? przetwarzane w celach marketingu
              bezpo??redniego produkt??w, zabezpieczenia i dochodzenia roszcze??
              lub ochrony przed roszczeniami U??ytkownika lub osoby trzeciej, jak
              r??wnie?? marketingu us??ug i produkt??w podmiot??w trzecich lub
              marketingu w??asnego, nieb??d??cego marketingiem bezpo??rednim.
            </span>
          </p>
          <p className='p15 ft0'>
            <span className='ft0'>III.</span>
            <span className='ft8'>RODZAJ DANYCH</span>
          </p>
          <p className='p6 ft10'>
            <span className='ft1'>1.</span>
            <span className='ft20'>
              Administrator przetwarza nast??puj??ce dane osobowe, kt??rych podanie
              jest niezb??dne do:
            </span>
          </p>
          <p className='p16 ft1'>
            <span className='ft1'>a.</span>
            <span className='ft14'>
              zarejestrowania si?? na stronie internetowej:
            </span>
          </p>
          <p className='p17 ft1'>
            <span className='ft1'>-</span>
            <span className='ft14'>imi?? i nazwisko;</span>
          </p>
          <p className='p18 ft1'>
            <span className='ft1'>-</span>
            <span className='ft14'>adres </span>
            <nobr>e-mail;</nobr>
          </p>
          <p className='p19 ft1'>
            <span className='ft1'>b.</span>
            <span className='ft13'>
              Dane podawane przez U??ytkownika opcjonalnie:
            </span>
          </p>
          <p className='p20 ft1'>
            <span className='ft1'>-</span>
            <span className='ft14'>data urodzenia;</span>
          </p>
          <p className='p21 ft0'>
            IV. PODSTAWA PRAWNA PRZETWARZANIA DANYCH OSOBOWYCH
          </p>
          <p className='p22 ft19'>
            <span className='ft1'>1.</span>
            <span className='ft18'>
              Dane osobowe s?? przetwarzane zgodnie z przepisami Rozporz??dzenia
              Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
              2016 r. w sprawie ochrony os??b ???zycznych w zwi??zku z
              przetwarzaniem danych osobowych i w sprawie swobodnego przep??ywu
              takich danych oraz uchylenia dyrektywy 95/46/WE (og??lne
              rozporz??dzenie o ochronie danych), OJ L 119, 4.5.2016, p.{' '}
            </span>
            <nobr>1???88,</nobr> dalej zwane: ???
            <span className='ft21'>rozporz??dzenie RODO</span>".
          </p>
          <p className='p23 ft10'>
            <span className='ft1'>2.</span>
            <span className='ft20'>
              Administrator przetwarza dane osobowe wy????cznie po uprzednim
              uzyskaniu zgody U??ytkownika, wyra??onej w chwili rejestracji na
              stronie internetowej.
            </span>
          </p>
        </div>
        <div id='id2_2'>
          <p className='p12 ft17'>2/5</p>
        </div>
      </div>
      <div id='page_3' style={{ margin: 'auto' }}>
        <div id='id3_1'>
          <p className='p13 ft5'>
            <span className='ft1'>3.</span>
            <span className='ft22'>
              Wyra??enie zgody na przetwarzanie danych osobowych jest ca??kowicie
              dobrowolne, jednak??e brak jej udzielenia uniemo??liwia
              zarejestrowanie si?? na stronie internetowej.
            </span>
          </p>
          <p className='p24 ft0'>
            <span className='ft0'>V.</span>
            <span className='ft8'>PRAWA PRZYS??UGUJ??CE U??YTKOWNIKOWI</span>
          </p>
          <p className='p6 ft10'>
            <span className='ft1'>1.</span>
            <span className='ft23'>
              U??ytkownik mo??e w ka??dej chwili za????da?? od administratora
              informacji o zakresie przetwarzania danych osobowych.
            </span>
          </p>
          <p className='p25 ft5'>
            <span className='ft1'>2.</span>
            <span className='ft7'>
              U??ytkownik mo??e w ka??dej chwili za????da?? poprawienia b??d??
              sprostowania swoich danych osobowych. U??ytkownik mo??e to r??wnie??
              zrobi?? samodzielnie, po zalogowaniu si?? na swoje konto.
            </span>
          </p>
          <p className='p3 ft19'>
            <span className='ft1'>3.</span>
            <span className='ft24'>
              U??ytkownik mo??e w ka??dej chwili wycofa?? swoj?? zgod?? na
              przetwarzanie jego danych osobowych, bez podawania przyczyny.
              ????danie nieprzetwarzania danych mo??e dotyczy?? wskazanego przez
              U??ytkownika konkretnego celu przetwarzania np. wycofanie zgody na
              otrzymywanie informacji handlowych b??d?? dotyczy?? wszystkich cel??w
              przetwarzania danych. Wycofanie zgody co do wszystkich cel??w
              przetwarzania spowoduje, ??e konto U??ytkownika zostanie usuni??te ze
              strony internetowej, wraz ze wszystkimi wcze??niej przetwarzanymi
              przez administratora danymi osobowymi U??ytkownika. Wycofanie zgody
              nie wp??ynie na ju?? dokonane czynno??ci.
            </span>
          </p>
          <p className='p26 ft19'>
            <span className='ft1'>4.</span>
            <span className='ft25'>
              U??ytkownik mo??e w ka??dej chwili ????da??, bez podawania przyczyny,
              aby administrator usun???? Jego dane. ????danie usuni??cia danych nie
              wp??ynie na dotychczas dokonane czynno??ci. Usuni??cie danych oznacza
              jednoczesne usuni??cie konta U??ytkownika, wraz ze wszystkimi
              zapisanymi i przetwarzanymi do tej pory przez administratora
              danymi osobowymi.
            </span>
          </p>
          <p className='p27 ft3'>
            <span className='ft1'>5.</span>
            <span className='ft6'>
              U??ytkownik mo??e w ka??dej chwili wyrazi?? sprzeciw przeciwko
              przetwarzaniu danych osobowych, zar??wno w zakresie wszystkich
              przetwarzanych przez
            </span>
          </p>
          <p className='p13 ft19'>
            administratora danych osobowych U??ytkownika, jak r??wnie?? jedynie w
            ograniczonym zakresie np. co do przetwarzania danych w konkretnie
            wskazanym celu. Sprzeciw nie wp??ynie na dotychczas dokonane
            czynno??ci. Wniesienie sprzeciwu spowoduje usuni??cie konta
            U??ytkownika, wraz ze wszystkimi zapisanymi i przetwarzanymi do tej
            pory, przez administratora, danymi osobowymi.
          </p>
          <p className='p25 ft3'>
            <span className='ft1'>6.</span>
            <span className='ft6'>
              U??ytkownik mo??e za????da?? ograniczenia przetwarzania danych
              osobowych, czy to przez okre??lony czas, czy te?? bez ograniczenia
              czasowego, ale w okre??lonym zakresie, co administrator b??dzie
              obowi??zany spe??ni??. ????danie to nie wp??ynie na dotychczas dokonane
              czynno??ci.
            </span>
          </p>
          <p className='p28 ft1'>
            <span className='ft1'>7.</span>
            <span className='ft26'>
              U??ytkownik mo??e za????da??, aby administrator przekaza?? innemu
              podmiotowi,
            </span>
          </p>
        </div>
        <div id='id3_2'>
          <p className='p12 ft17'>3/5</p>
        </div>
      </div>
      <div id='page_4' style={{ margin: 'auto' }}>
        <div id='id4_1'>
          <p className='p13 ft27'>
            przetwarzane dane osobowe U??ytkownika. Powinien w tym celu napisa??
            pro??b?? do administratora, wskazuj??c, jakiemu podmiotowi (nazwa,
            adres) nale??y przekaza?? dane osobowe U??ytkownika oraz jakie
            konkretnie dane U??ytkownik ??yczy sobie, ??eby administrator
            przekaza??. Po potwierdzeniu przez U??ytkownika swojego ??yczenia,
            administrator przeka??e, w formie elektronicznej, wskazanemu
            podmiotowi, dane osobowe U??ytkownika. Potwierdzenie przez
            U??ytkownika ????dania jest niezb??dne z uwagi na bezpiecze??stwo danych
            osobowych U??ytkownika oraz uzyskanie pewno??ci, ??e ????danie pochodzi
            od osoby uprawnionej.
          </p>
          <p className='p29 ft10'>
            <span className='ft1'>8.</span>
            <span className='ft20'>
              Administrator informuje U??ytkownika o podj??tych dzia??aniach, przed
              up??ywem miesi??ca od otrzymania jednego z ????da?? wymienionych w
              poprzednich punktach.
            </span>
          </p>
          <p className='p30 ft0'>VI. OKRES PRZECHOWYWANIA DANYCH OSOBOWYCH</p>
          <p className='p22 ft19'>
            <span className='ft1'>1.</span>
            <span className='ft25'>
              Zasadniczo dane osobowe s?? przechowywane tylko tak d??ugo, jak to
              jest konieczne do wype??nienia zobowi??za?? umownych lub ustawowych,
              dla kt??rych zosta??y one zgromadzone. Dane te zostan?? usuni??te
              natychmiast, gdy ich przechowywanie nie b??dzie konieczne, w celach
              dowodowych, zgodnie z prawem cywilnym lub w zwi??zku z ustawowym
              obowi??zkiem przechowywania danych.
            </span>
          </p>
          <p className='p4 ft3'>
            <span className='ft1'>2.</span>
            <span className='ft6'>
              Informacje dotycz??ce umowy przechowuje si?? w celach dowodowych,
              przez okres trzech lat, pocz??wszy od ko??ca roku, w kt??rym
              zako??czono relacje handlowe z U??ytkownikiem. Usuni??cie danych
              nast??pi po up??ywie ustawowego terminu przedawnienia dochodzenia
              roszcze?? umownych.
            </span>
          </p>
          <p className='p3 ft5'>
            <span className='ft1'>3.</span>
            <span className='ft7'>
              Ponadto, administrator mo??e zachowa?? informacje archiwalne,
              dotycz??ce zawartych transakcji, gdy?? ich przechowywanie jest
              zwi??zane z przys??uguj??cymi U??ytkownikowi roszczeniami np. z tytu??u
              r??kojmi.
            </span>
          </p>
          <p className='p3 ft19'>
            <span className='ft1'>4.</span>
            <span className='ft24'>
              Je??li ??adna umowa nie zosta??a zawarta, mi??dzy U??ytkownikiem i
              W??a??cicielem, dane osobowe U??ytkownika s?? przechowywane do czasu
              usuni??cia konta U??ytkownika na stronie internetowej. Usuni??cie
              konta mo??e nast??pi?? w wyniku wysuni??cia ????dania przez U??ytkownika,
              wycofania zgody na przetwarzanie danych osobowych, b??d?? te??
              zg??oszenia sprzeciwu co do przetwarzania tych danych.
            </span>
          </p>
          <p className='p31 ft0'>
            VII. POWIERZENIE PRZETWARZANIA DANYCH INNYM PODMIOTOM
          </p>
          <p className='p22 ft3'>
            <span className='ft1'>1.</span>
            <span className='ft6'>
              Administrator mo??e powierza?? przetwarzanie danych osobowych
              podmiotom wsp????pracuj??cym z administratorem, w zakresie niezb??dnym
              dla realizacji transakcji np. w celu przygotowania zam??wionego
              towaru oraz dostarczania przesy??ek lub przekazywania informacji
              handlowych, pochodz??cych od
            </span>
          </p>
        </div>
        <div id='id4_2'>
          <p className='p12 ft17'>4/5</p>
        </div>
      </div>
      <div id='page_5' style={{ margin: 'auto' }}>
        <div id='id5_1'>
          <p className='p12 ft16'>
            administratora (ostatnie dotyczy U??ytkownik??w, kt??rzy wyrazili zgod??
            na otrzymywanie informacji handlowych).
          </p>
          <p className='p32 ft3'>
            <span className='ft1'>2.</span>
            <span className='ft2'>
              Poza celami wskazanymi w niniejszej Polityce Prywatno??ci, dane
              osobowe U??ytkownik??w, nie b??d?? w ??aden spos??b udost??pniane osobom
              trzecim ani przekazywane innym podmiotom, w celu przesy??ania
              materia????w marketingowych tych os??b trzecich.
            </span>
          </p>
          <p className='p28 ft10'>
            <span className='ft1'>3.</span>
            <span className='ft28'>
              Dane osobowe U??ytkownik??w strony internetowej nie s?? przekazywane
              poza obszar Unii Europejskiej.
            </span>
          </p>
          <p className='p33 ft10'>
            <span className='ft1'>4.</span>
            <span className='ft28'>
              Niniejsza Polityka Prywatno??ci jest zgodna z przepisami
              wynikaj??cymi z art. 13 ust. 1 i ust. 2 rozporz??dzenia RODO.
            </span>
          </p>
        </div>
        <div id='id5_2' style={{ margin: 'auto' }}>
          <p className='p12 ft17'>5/5</p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPrivacy;
