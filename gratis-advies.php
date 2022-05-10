<!DOCTYPE html>

<html>

    <head>
        <title>Vergelijk Mijn Energie - Doe de tarievencheck</title>
        <meta name="description" content="Wist je dat je honderden euro's per jaar kunt besparen door ieder jaar over te stappen van energie? Wij helpen we je daar graag bij. Wij sluiten exclusieve deals met energieleveranciers, zodat jij kunt profiteren van extra lage tarieven en een eenmalige welkomstkorting. Deze scherpe deals vind je niet bij de energieleverancier zelf.">
        <link rel="canonical" href="https://www.vergelijkmijnenergie.nl/">
        <?php include __DIR__ . '/head.php'; ?>
    </head>

    <body>
        
        <!-- LOADING --><!-- ----------------- -->
        <!-- ------- --><!-- ----------------- -->

        <?php include __DIR__ . '/includes/load-page.php' ?>

        <!-- COOKIE CONSENT --><!-- ----------------- -->
        <!-- ------------- --><!-- ----------------- -->

        <?php include __DIR__ . '/includes/cookie-banner.php' ?>

        <!-- FORM --><!-- ----------------- --><!-- ----------------- -->
        <!-- ---- --><!-- ----------------- --><!-- ----------------- -->

        
        <div class="form-page">

            <!-- FORM BEGIN (FIRST STEP) -->
            <div class="form form-begin">

                <div class="img-wrapper small">
                    <img src="assets/media/logo.png" alt="">
                </div>
                
                <br><br>

                <span class="baloo-thick-tiny">Wat is je adres?</span>

                <br><br><br>

                <form action="">

                    <div class="input-field special-label text-left">
                        <input class="formzip" type="text" id="zip" name="zipcode" required>
                        <label for="zip">Postcode</label>
                    </div>

                    <div class="input-field special-label text-left">
                        <input class="formhousenumber" type="number" id="housenumber" name="housenumber" required>
                        <label for="housenumber">Huisnr.</label>
                    </div>

                    <div class="input-field special-label text-left">
                        <input class="formaddition" type="text" id="addition" name="addition" required>
                        <label for="addition">Toev.</label>
                    </div>

                    <br><br><br>

                    <div id="next-step-button" class="submit">Volgende</div>

                </form>

            </div>

            <!-- FORM END (LAST STEP) -->
            <div class="form form-end">

                <div class="img-wrapper small">
                    <img src="assets/media/logo.png" alt="">
                </div>
                
                <br><br><br>

                <span class="baloo-thick-tiny">Maatwerk advies over besparen & verduurzamen</span>

                <br><br>

                <span class="baloo-thick-extra-tiny secondary-color">Er wordt binnen 24 uur contact met je opgenomen om een aanbod met je te delen</span>

                <br><br><br>

                <form action="">

                    <div class="input-field special-label text-left">
                        <input type="number" id="usage" name="power_usage" required>
                        <label for="usage">Verbruik (schatting in KwH)</label>
                    </div>

                    <div class="input-field special-label text-left">
                        <input type="text" id="name" name="first_name" required>
                        <label for="name">Naam</label>
                    </div>

                    <div class="input-field special-label text-left">
                        <input type="number" id="phone" name="phone" required>
                        <label for="phone">Telefoonnummer</label>
                    </div>

                    <div class="input-field special-label text-left">
                        <input type="text" id="mail" name="email" required>
                        <label for="mail">Emailadres</label>
                    </div>

                    <br><br><br>

                    <span class="baloo-regular-extra-tiny">Om je van de beste mogelijkheid te voorzien benaderen we je telefonisch.</span>

                    <br><br><br>

                    <div class="input-field-secondary text-left">
                        <input class="beautifull-checkbox" id="opt-in" name="optin" value="1" type="checkbox" required>
                        <label class="beautifull-checkbox-label" for="opt-in">Ja ik geef toestemming aan VergelijkMijnEnergie mij per telefoon te mogen adviseren over besparingen op mijn vaste lasten. Bekijkt u voor meer informatie onze <a class="link-secondary-color" target="blank" href="algemene-voorwaarden">algemene voorwaarden</a></label>
                    </div>

                    <br><br>

                    <div class="error-msg" style="color: #FF4848; display: none;">
                        <span class="baloo-regular-extra-tiny">Toestemming verplicht</span>
                    </div>

                    <br><br><br>

                    <div id="submit-form-button" class="submit">Verzenden</div>

                </form>

            </div>


            <!-- CONFIRMATION -->
            <div id="confirmation-msg" style="display:none; padding: 1rem;">
                <i class="far fa-check-circle" style="color: var(--tertiary-color); font-size: 7rem;"></i>
                <br><br>
                <span class="fredoka-thick-medium" style="color: var(--tertiary-color);">We hebben je aanvraag ontvangen</span>
                <br><br>
                <span class="baloo-regular-small">Er wordt spoedig contact met je opgenomen!</span>
                <br><br>
                <a class="button-secondary" href="vergelijk-energie">Naar homepagina</a>
            </div>

            <!-- FAILURE -->
            <div id="failure-msg" style="display:none; padding: 1rem;">
                <i class="fas fa-exclamation-circle" style="color: #FF4848; font-size: 7rem;"></i>
                <br><br>
                <span class="fredoka-thick-medium" style="color: #FF4848;">Er is iets mis gegaan</span>
                <br><br>
                <span class="baloo-regular-small">Onze IT'ers zijn er mee bezig, probeer het later opnieuw...</span>
                <br><br>
                <a class="button-secondary" href="vergelijk-energie">Naar homepagina</a>
            </div>

        </div>
        

        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->
        <!-- ----------------- --><!-- ----------------- -->

    </body>

</html>