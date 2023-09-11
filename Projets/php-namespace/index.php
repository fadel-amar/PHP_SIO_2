<?php
require "./vendor/autoload.php";
use App\dossier1\Personne;
use App\Equipe;
use App\Championnat;

// Créer un championnat
$ligue1 = new Championnat("Lique 1");
echo $ligue1->getNom();

$psg = new Equipe("PSG", "Luis Enrique", "1970");
$om = new Equipe("OM","Marcelino","1899");
$ligue1->ajouterEquipe($psg);
$ligue1->ajouterEquipe($om);

echo PHP_EOL;

echo $ligue1->getNombreEquipes();
echo PHP_EOL;

    foreach ($ligue1->getEquipes() as $equipe) {
        echo $equipe->getNom().PHP_EOL;
    }
// Créer personne
$personne = new Personne("toto");
echo $personne->getNom();

echo PHP_EOL;

$ligueUber =  new Championnat("Ligue Uber");
$ligueUber->ChargerEquipe('./csv/equipe.csv');

print_r($ligueUber->getEquipes());