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
          <p className='p0 ft0'>POLITYKA PRYWATNOŚCI</p>
          <p className='p1 ft0'>STRONY INTERNETOWEJ WALKWARDS.PL</p>
          <p className='p2 ft3'>
            <span className='ft1'>1.</span>
            <span className='ft2'>
              Dla Właściciela niniejszej strony internetowej, ochrona danych
              osobowych Użytkowników jest sprawą najwyższej wagi. Dokłada on
              ogrom starań, aby Użytkownicy czuli się bezpiecznie, powierzając
              swoje dane osobowe w trakcie korzystania ze strony internetowej.
            </span>
          </p>
          <p className='p3 ft5'>
            <span className='ft1'>2.</span>
            <span className='ft4'>
              Użytkownik to osoba ﬁzyczna, osoba prawna albo jednostka
              organizacyjna nieposiadająca osobowości prawnej, której ustawa
              przyznaje zdolność prawną, korzystająca z usług elektronicznych
              dostępnych w ramach strony internetowej.
            </span>
          </p>
          <p className='p3 ft3'>
            <span className='ft1'>3.</span>
            <span className='ft6'>
              Niniejsza polityka prywatności wyjaśnia zasady i zakres
              przetwarzania danych osobowych Użytkownika, przysługujące mu
              prawa, jak też obowiązki administratora tych danych, a także
              informuje o używaniu plików cookies.
            </span>
          </p>
          <p className='p4 ft5'>
            <span className='ft1'>4.</span>
            <span className='ft7'>
              Administrator stosuje najnowocześniejsze środki techniczne i
              rozwiązania organizacyjne, zapewniające wysoki poziom ochrony
              przetwarzanych danych osobowych oraz zabezpieczenia przed dostępem
              osób nieupoważnionych.
            </span>
          </p>
          <p className='p5 ft0'>
            <span className='ft0'>I.</span>
            <span className='ft8'>ADMINISTRATOR DANYCH OSOBOWYCH</span>
          </p>
          <p className='p6 ft10'>
            Administratorem danych osobowych jest Pan Kacper Adamczyk,
            zamieszkały przy: os.Szymanowskiego 5/10 <nobr>32-020</nobr>{' '}
            Wieliczka (zwany dalej: „<span className='ft9'>Właściciel</span>").
          </p>
          <p className='p7 ft0'>
            <span className='ft0'>II.</span>
            <span className='ft8'>CEL PRZETWARZANIA DANYCH OSOBOWYCH</span>
          </p>
          <p className='p8 ft12'>
            <span className='ft1'>1.</span>
            <span className='ft11'>
              Administrator przetwarza dane osobowe Użytkownika w celu:
              Prawidłowego działania wszystkich funkcji aplikacji.
            </span>
          </p>
          <p className='p9 ft1'>
            <span className='ft1'>2.</span>
            <span className='ft13'>
              Oznacza to, że dane te są potrzebne w szczególności do
            </span>
          </p>
          <p className='p10 ft1'>
            <span className='ft1'>a.</span>
            <span className='ft14'>
              zarejestrowania się na stronie internetowej;
            </span>
          </p>
          <p className='p10 ft1'>
            <span className='ft1'>b.</span>
            <span className='ft13'>odbioru wygranych nagród</span>
          </p>
          <p className='p11 ft16'>
            <span className='ft1'>3.</span>
            <span className='ft15'>
              Użytkownik może również wyrazić zgodę na otrzymywanie informacji o
              nowościach i promocjach, co spowoduje, że administrator będzie
              również
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
            przetwarzać dane osobowe w celu przesyłania Użytkownikowi informacji
            handlowych dotyczących m.in. nowych produktów lub usług, promocji
            czy wyprzedaży.
          </p>
          <p className='p14 ft3'>
            <span className='ft1'>4.</span>
            <span className='ft2'>
              Dane osobowe są również przetwarzane w ramach wypełnienia prawnych
              obowiązków ciążących na administratorze danych oraz realizacji
              zadań w interesie publicznym m.in. do wykonywania zadań związanych
              z bezpieczeństwem i obronnością lub przechowywaniem dokumentacji
              podatkowej.
            </span>
          </p>
          <p className='p3 ft19'>
            <span className='ft1'>5.</span>
            <span className='ft18'>
              Dane osobowe mogą być również przetwarzane w celach marketingu
              bezpośredniego produktów, zabezpieczenia i dochodzenia roszczeń
              lub ochrony przed roszczeniami Użytkownika lub osoby trzeciej, jak
              również marketingu usług i produktów podmiotów trzecich lub
              marketingu własnego, niebędącego marketingiem bezpośrednim.
            </span>
          </p>
          <p className='p15 ft0'>
            <span className='ft0'>III.</span>
            <span className='ft8'>RODZAJ DANYCH</span>
          </p>
          <p className='p6 ft10'>
            <span className='ft1'>1.</span>
            <span className='ft20'>
              Administrator przetwarza następujące dane osobowe, których podanie
              jest niezbędne do:
            </span>
          </p>
          <p className='p16 ft1'>
            <span className='ft1'>a.</span>
            <span className='ft14'>
              zarejestrowania się na stronie internetowej:
            </span>
          </p>
          <p className='p17 ft1'>
            <span className='ft1'>-</span>
            <span className='ft14'>imię i nazwisko;</span>
          </p>
          <p className='p18 ft1'>
            <span className='ft1'>-</span>
            <span className='ft14'>adres </span>
            <nobr>e-mail;</nobr>
          </p>
          <p className='p19 ft1'>
            <span className='ft1'>b.</span>
            <span className='ft13'>
              Dane podawane przez Użytkownika opcjonalnie:
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
              Dane osobowe są przetwarzane zgodnie z przepisami Rozporządzenia
              Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
              2016 r. w sprawie ochrony osób ﬁzycznych w związku z
              przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
              takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
              rozporządzenie o ochronie danych), OJ L 119, 4.5.2016, p.{' '}
            </span>
            <nobr>1–88,</nobr> dalej zwane: „
            <span className='ft21'>rozporządzenie RODO</span>".
          </p>
          <p className='p23 ft10'>
            <span className='ft1'>2.</span>
            <span className='ft20'>
              Administrator przetwarza dane osobowe wyłącznie po uprzednim
              uzyskaniu zgody Użytkownika, wyrażonej w chwili rejestracji na
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
              Wyrażenie zgody na przetwarzanie danych osobowych jest całkowicie
              dobrowolne, jednakże brak jej udzielenia uniemożliwia
              zarejestrowanie się na stronie internetowej.
            </span>
          </p>
          <p className='p24 ft0'>
            <span className='ft0'>V.</span>
            <span className='ft8'>PRAWA PRZYSŁUGUJĄCE UŻYTKOWNIKOWI</span>
          </p>
          <p className='p6 ft10'>
            <span className='ft1'>1.</span>
            <span className='ft23'>
              Użytkownik może w każdej chwili zażądać od administratora
              informacji o zakresie przetwarzania danych osobowych.
            </span>
          </p>
          <p className='p25 ft5'>
            <span className='ft1'>2.</span>
            <span className='ft7'>
              Użytkownik może w każdej chwili zażądać poprawienia bądź
              sprostowania swoich danych osobowych. Użytkownik może to również
              zrobić samodzielnie, po zalogowaniu się na swoje konto.
            </span>
          </p>
          <p className='p3 ft19'>
            <span className='ft1'>3.</span>
            <span className='ft24'>
              Użytkownik może w każdej chwili wycofać swoją zgodę na
              przetwarzanie jego danych osobowych, bez podawania przyczyny.
              Żądanie nieprzetwarzania danych może dotyczyć wskazanego przez
              Użytkownika konkretnego celu przetwarzania np. wycofanie zgody na
              otrzymywanie informacji handlowych bądź dotyczyć wszystkich celów
              przetwarzania danych. Wycofanie zgody co do wszystkich celów
              przetwarzania spowoduje, że konto Użytkownika zostanie usunięte ze
              strony internetowej, wraz ze wszystkimi wcześniej przetwarzanymi
              przez administratora danymi osobowymi Użytkownika. Wycofanie zgody
              nie wpłynie na już dokonane czynności.
            </span>
          </p>
          <p className='p26 ft19'>
            <span className='ft1'>4.</span>
            <span className='ft25'>
              Użytkownik może w każdej chwili żądać, bez podawania przyczyny,
              aby administrator usunął Jego dane. Żądanie usunięcia danych nie
              wpłynie na dotychczas dokonane czynności. Usunięcie danych oznacza
              jednoczesne usunięcie konta Użytkownika, wraz ze wszystkimi
              zapisanymi i przetwarzanymi do tej pory przez administratora
              danymi osobowymi.
            </span>
          </p>
          <p className='p27 ft3'>
            <span className='ft1'>5.</span>
            <span className='ft6'>
              Użytkownik może w każdej chwili wyrazić sprzeciw przeciwko
              przetwarzaniu danych osobowych, zarówno w zakresie wszystkich
              przetwarzanych przez
            </span>
          </p>
          <p className='p13 ft19'>
            administratora danych osobowych Użytkownika, jak również jedynie w
            ograniczonym zakresie np. co do przetwarzania danych w konkretnie
            wskazanym celu. Sprzeciw nie wpłynie na dotychczas dokonane
            czynności. Wniesienie sprzeciwu spowoduje usunięcie konta
            Użytkownika, wraz ze wszystkimi zapisanymi i przetwarzanymi do tej
            pory, przez administratora, danymi osobowymi.
          </p>
          <p className='p25 ft3'>
            <span className='ft1'>6.</span>
            <span className='ft6'>
              Użytkownik może zażądać ograniczenia przetwarzania danych
              osobowych, czy to przez określony czas, czy też bez ograniczenia
              czasowego, ale w określonym zakresie, co administrator będzie
              obowiązany spełnić. Żądanie to nie wpłynie na dotychczas dokonane
              czynności.
            </span>
          </p>
          <p className='p28 ft1'>
            <span className='ft1'>7.</span>
            <span className='ft26'>
              Użytkownik może zażądać, aby administrator przekazał innemu
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
            przetwarzane dane osobowe Użytkownika. Powinien w tym celu napisać
            prośbę do administratora, wskazując, jakiemu podmiotowi (nazwa,
            adres) należy przekazać dane osobowe Użytkownika oraz jakie
            konkretnie dane Użytkownik życzy sobie, żeby administrator
            przekazał. Po potwierdzeniu przez Użytkownika swojego życzenia,
            administrator przekaże, w formie elektronicznej, wskazanemu
            podmiotowi, dane osobowe Użytkownika. Potwierdzenie przez
            Użytkownika żądania jest niezbędne z uwagi na bezpieczeństwo danych
            osobowych Użytkownika oraz uzyskanie pewności, że żądanie pochodzi
            od osoby uprawnionej.
          </p>
          <p className='p29 ft10'>
            <span className='ft1'>8.</span>
            <span className='ft20'>
              Administrator informuje Użytkownika o podjętych działaniach, przed
              upływem miesiąca od otrzymania jednego z żądań wymienionych w
              poprzednich punktach.
            </span>
          </p>
          <p className='p30 ft0'>VI. OKRES PRZECHOWYWANIA DANYCH OSOBOWYCH</p>
          <p className='p22 ft19'>
            <span className='ft1'>1.</span>
            <span className='ft25'>
              Zasadniczo dane osobowe są przechowywane tylko tak długo, jak to
              jest konieczne do wypełnienia zobowiązań umownych lub ustawowych,
              dla których zostały one zgromadzone. Dane te zostaną usunięte
              natychmiast, gdy ich przechowywanie nie będzie konieczne, w celach
              dowodowych, zgodnie z prawem cywilnym lub w związku z ustawowym
              obowiązkiem przechowywania danych.
            </span>
          </p>
          <p className='p4 ft3'>
            <span className='ft1'>2.</span>
            <span className='ft6'>
              Informacje dotyczące umowy przechowuje się w celach dowodowych,
              przez okres trzech lat, począwszy od końca roku, w którym
              zakończono relacje handlowe z Użytkownikiem. Usunięcie danych
              nastąpi po upływie ustawowego terminu przedawnienia dochodzenia
              roszczeń umownych.
            </span>
          </p>
          <p className='p3 ft5'>
            <span className='ft1'>3.</span>
            <span className='ft7'>
              Ponadto, administrator może zachować informacje archiwalne,
              dotyczące zawartych transakcji, gdyż ich przechowywanie jest
              związane z przysługującymi Użytkownikowi roszczeniami np. z tytułu
              rękojmi.
            </span>
          </p>
          <p className='p3 ft19'>
            <span className='ft1'>4.</span>
            <span className='ft24'>
              Jeśli żadna umowa nie została zawarta, między Użytkownikiem i
              Właścicielem, dane osobowe Użytkownika są przechowywane do czasu
              usunięcia konta Użytkownika na stronie internetowej. Usunięcie
              konta może nastąpić w wyniku wysunięcia żądania przez Użytkownika,
              wycofania zgody na przetwarzanie danych osobowych, bądź też
              zgłoszenia sprzeciwu co do przetwarzania tych danych.
            </span>
          </p>
          <p className='p31 ft0'>
            VII. POWIERZENIE PRZETWARZANIA DANYCH INNYM PODMIOTOM
          </p>
          <p className='p22 ft3'>
            <span className='ft1'>1.</span>
            <span className='ft6'>
              Administrator może powierzać przetwarzanie danych osobowych
              podmiotom współpracującym z administratorem, w zakresie niezbędnym
              dla realizacji transakcji np. w celu przygotowania zamówionego
              towaru oraz dostarczania przesyłek lub przekazywania informacji
              handlowych, pochodzących od
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
            administratora (ostatnie dotyczy Użytkowników, którzy wyrazili zgodę
            na otrzymywanie informacji handlowych).
          </p>
          <p className='p32 ft3'>
            <span className='ft1'>2.</span>
            <span className='ft2'>
              Poza celami wskazanymi w niniejszej Polityce Prywatności, dane
              osobowe Użytkowników, nie będą w żaden sposób udostępniane osobom
              trzecim ani przekazywane innym podmiotom, w celu przesyłania
              materiałów marketingowych tych osób trzecich.
            </span>
          </p>
          <p className='p28 ft10'>
            <span className='ft1'>3.</span>
            <span className='ft28'>
              Dane osobowe Użytkowników strony internetowej nie są przekazywane
              poza obszar Unii Europejskiej.
            </span>
          </p>
          <p className='p33 ft10'>
            <span className='ft1'>4.</span>
            <span className='ft28'>
              Niniejsza Polityka Prywatności jest zgodna z przepisami
              wynikającymi z art. 13 ust. 1 i ust. 2 rozporządzenia RODO.
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
