<?php
/*    STARTSEITE

  *   TODO: Startseite nach Design umsetzen
  *   TODO: ACF einbinden
  *   TODO: AOS-Animationen erstellen
  *   TODO: Alle Inhalte für mobile Endgeräte optimieren
  *   TODO: Bereiche wie im Beispiel umsetzen
  *   TODO: Bei Bedarf ist die Bootstrap-Integration in der header.php und footer.php auskommentiert
  *   TODO: Die "screenshot.png" muss ausgetauscht werden
  *   TODO: Weitere Änderungen die Fallspezifisch sind Asana zu entnehmen

*/
get_header(); ?>
<main>
  <div id="home">
    <?php
      include 'sections/01_Home/hero.php';
      include 'sections/01_Home/about.php';
      include 'sections/01_Home/portfolio.php';
      include 'sections/01_Home/clients.php';
      include 'sections/01_Home/contact.php';
    ?>
  </div>

  <div id="agency">
    <?php
      include 'sections/02_Agency/hero.php';
      include 'sections/02_Agency/competence.php';
      include 'sections/02_Agency/team.php';
      include 'sections/01_Home/about.php';
      include 'sections/02_Agency/skillz.php';
      include 'sections/01_Home/clients.php';
      include 'sections/01_Home/contact.php';
    ?>
  </div>

  <div id="werke">
    <?php
      include 'sections/03_work/portfolio.php';
    ?>
  </div>

  <div id="moinmoin">
    <?php
      include 'sections/04_MoinMoin/contact.php';
    ?>
  </div>

</main>

<?php get_footer(); ?>
