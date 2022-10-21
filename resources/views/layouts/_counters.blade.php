@if ( !empty($yandexMetrika = $counters['yandexMetrika']) )
    @php
        $yandexMetrika = array_unique($yandexMetrika, SORT_REGULAR)
    @endphp
    @foreach($yandexMetrika as $count => $numCounter)
        <!-- Yandex.Metrika counter #{{ $count }}-->
        <script type="text/javascript" >
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym({{ $numCounter }}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/{{ $numCounter }}" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    @endforeach
@endif

@if ( !empty($fb = $counters['facebook']) )
    @php
        $fb = array_unique($fb, SORT_REGULAR)
    @endphp
    @foreach($fb as $count => $numCounter)
        <!-- Facebook Pixel Code #{{ $count }}-->
        <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '{{ $numCounter }}');
            fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id={{ $numCounter }}&ev=PageView&noscript=1"/></noscript>
        <!-- End Facebook Pixel Code -->
    @endforeach
@endif

        <!-- /Callibri counter -->
        <script src="//cdn.callibri.ru/callibri.js" type="text/javascript" charset="utf-8"></script>