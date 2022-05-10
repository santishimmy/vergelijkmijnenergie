<!DOCTYPE html>

<html>

    <head>
        <title>Vergelijk Mijn Energie - Maak de stap naar zonne-energie!</title>
        <meta name="description" content="Investeren in verduurzaming, En daarbij een hoog rendement behalen! Met duurzame energie bespaar je op je energierekening vanaf dag één! De energieprijzen zijn nog nooit zo hoog geweest als nu, dus zonnepanelen aanschaffen zorgt nu voor maximaal rendement!">
        <link rel="canonical" href="https://www.vergelijkmijnenergie.nl/zonne-energie">
        <?php include __DIR__ . '/head.php'; ?>
    </head>

    <body>
        
        <!-- LOADING --><!-- ----------------- -->
        <!-- ------- --><!-- ----------------- -->

        <?php include __DIR__ . '/includes/load-page.php' ?>

        <!-- HEADER --><!-- ----------------- -->
        <!-- ------ --><!-- ----------------- -->

        <header>
            <?php include __DIR__ . '/includes/header.php' ?>
        </header>

        <!-- MENU --><!-- ----------------- -->
        <!-- ---- --><!-- ----------------- -->

        <menu>
            <?php include __DIR__ . '/includes/menu.php' ?>
        </menu>

        <!-- COOKIE CONSENT --><!-- ----------------- -->
        <!-- ------------- --><!-- ----------------- -->

        <?php include __DIR__ . '/includes/cookie-banner.php' ?>

        <!-- BANNER --><!-- ----------------- -->
        <!-- ------ --><!-- ----------------- -->

        <div class="banner">

            <div class="layover-element-1"></div>
            <div class="layover-element-2">
                <img src="assets/media/zonnepanelen-dak.jpg" alt="">
            </div>

            <div class="container">
                
                <div class="post wide">
                    <span class="fredoka-thick-small tertiary-color text-shadow">Bespaar direct met zonnepanelen!</span>
                    <br><br>
                    <span class="baloo-thick-small">Bereken nu hoeveel je kan besparen met eigen stroom van eigen dak!</span>
                </div>

                <div class="post wide">
                    <div class="li-element"><i class="fas fa-check"></i><span class="baloo-thick-tiny">Bespaar & verduurzaam</span></div><br>
                    <div class="li-element"><i class="fas fa-check"></i><span class="baloo-thick-tiny">Eigen stroom van eigen dak</span></div><br>
                    <div class="li-element"><i class="fas fa-check"></i><span class="baloo-thick-tiny">Direct lagere energiekosten</span></div><br>
                </div>

                <div class="formbox">
                        
                    <span class="karla-thick-medium">Check meteen of jouw dak geschikt is!</span>

                    <br><br>

                    <form class="start-form" action="">
                        <div class="input-field">
                            <label for="zip">Postcode</label>
                            <input class="formzip" id="zip" type="text" placeholder="1234 AB">
                        </div>

                        <div class="input-field">
                            <label for="housenumber">Huisnr.</label>
                            <input class="formhousenumber" id="housenumber" type="text" placeholder="12">
                        </div>

                        <div class="input-field">
                            <label for="addition">Toev.</label>
                            <input class="formaddition" id="addition" type="text" placeholder="A">
                        </div>

                        <div class="submit">Gratis advies</div>
                    </form>

                </div>

            </div>
        </div>

        <!-- SECTIONS --><!-- ----------------- --><!-- ----------------- -->
        <!-- -------- --><!-- ----------------- --><!-- ----------------- -->

        <section>
            <div class="section">
                <div class="container">

                    <div class="post wide text-center">
                        <span class="baloo-thick-medium">Maak de verandering naar zonne-energie!</span>
                        <br><br>
                        <span class="baloo-regular-small">Met duurzame energie bespaar je op je energierekening vanaf dag één!</span>
                        <br><br>
                        <a href="gratis-advies" class="button-secondary">Gratis advies</a>
                    </div>

                </div>
            </div>
        </section>

        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->

        <section>
            <div class="section">
                <div class="container">

                    <div class="post medium align-middle tc-bp-1150">
                        <div class="cwt-animation text-center">
                            <div class="baloo-thick-big"><b>€</b></div>
                            <div class="cwt-animation-outline-one"></div>
                            <div class="cwt-animation-outline-two"></div>
                        </div>

                        <br><br><br><br><br><br>
                        
                        <span class="baloo-thick-small"><b>Rendement op lange termijn!</b></span>
                        <br><br>
                        <span class="baloo-regular-tiny">Een gemiddeld huishouden verdient tot €21.732 aan zonnepanelen!</span>
                        
                    </div>

                    <div class="post medium align-middle">
                        <span class="baloo-thick-medium">Investeren in verduurzaming</span>
                        <br><br>
                        <span class="baloo-regular-small">En daarbij een hoog rendement behalen!</span>
                        <br><br>
                        <span class="karla-regular-medium">
                            De energieprijzen zijn nog nooit zo hoog geweest als nu, dus zonnepanelen aanschaffen zorgt nu voor maximaal rendement!
                        </span>
                    </div>

                </div>
            </div>
        </section>

        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->

        <section>
            <div class="section">
                <div class="container">

                    <div class="article">
                        <span class="fredoka-thick-medium"><b>Jouw rendement in 5 jaar!</b></span>
                        <br>
                        <span class="fredoka-regular-medium">Winst, opwekking en verduurzaming</span> 
                    </div>

                    <br><br><br><br>

                    <span class="baloo-thick-medium">Aantal zonnepanelen?</span><br><br>
                    <span class="baloo-regular-tiny">Kies het aantal zonnepanelen met gebruik van de slider en zie je opbrengst terug!</span>

                    <br><br><br>

                    <label id="output-panelen" class="baloo-thick-small" for="panel-amount">
                        <span>10</span>    
                    </label>

                    <br><br>

                    <div class="calculator">
                        <input id="calculation-input" type="range" class="panel-amount" name="panel-amount" min="1" max="40" step="1" value="10">
                    </div>

                    <br><br><br><br>

                    <span class="baloo-thick-small"><b>In 5 jaar heb je:</b></span>

                    <br><br><br>

                    <div id="output">
                        <div id="output-rendement" class="post small">
                            <span class="baloo-thick-huge output"><b></b></span>
                            <br><br>
                            <span class="karla-thick-medium"><b>Euro</b></span>
                            <br>
                            <span class="karla-regular-medium">Rendement</span>
                        </div>

                        <div id="output-verduurzaming" class="post small">
                            <span class="baloo-thick-huge output"><b></b></span>
                            <br><br>
                            <span class="karla-thick-medium"><b>Kg</b></span>
                            <br>
                            <span class="karla-regular-medium">Co2 Besparing</span>
                        </div>

                        <div id="output-opwekking" class="post small">
                            <span class="baloo-thick-huge output"><b></b></span>
                            <br><br>
                            <span class="karla-thick-medium"><b>KwH</b></span>
                            <br>
                            <span class="karla-regular-medium">Opgewekt</span>
                        </div>
                    </div>

                    <br><br><br><br><br>

                    <div class="article">
                        <span class="karla-thick-medium">De bovenstaande berekening is op basis van een energieprijs van €0,34 per KwH, deze is op het moment nog hoger!</span>
                    </div>

                </div>
            </div>
        </section>

        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->

        <section>
            <div class="section">

                <div class="layover-element-4">
                    <img src="assets/media/zonnepanelen-wolken.jpg" alt="">
                </div>

                <div class="container">

                    <div class="formbox">
                        
                        <span class="karla-thick-medium">Check meteen of jouw dak geschikt is!</span>
    
                        <br><br>
    
                        <form class="start-form" action="">
                            <div class="input-field">
                                <label for="zip">Postcode</label>
                                <input class="formzip" id="zip" type="text" placeholder="1234 AB">
                            </div>
        
                            <div class="input-field">
                                <label for="housenumber">Huisnr.</label>
                                <input class="formhousenumber" id="housenumber" type="text" placeholder="12">
                            </div>
        
                            <div class="input-field">
                                <label for="addition">Toev.</label>
                                <input class="formaddition" id="addition" type="text" placeholder="A">
                            </div>
        
                            <div class="submit">Gratis advies</div>
                        </form>

                    </div>

                </div>
            </div>
        </section>

        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->

        <!-- FOOTER --><!-- ----------------- -->
        <!-- ------ --><!-- ----------------- -->

        <footer>
            <?php include __DIR__ . '/includes/footer.php' ?>
        </footer>

    </body>

</html>