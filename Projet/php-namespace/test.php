<?php
require "./vendor/autoload.php";
use League\Csv\Reader;

// Importer le csv

$csv = Reader::createFromPath('./csv/equipe.csv')->setHeaderOffset(0);

$headers = $csv->getHeader();
$records = $csv->getRecords();

dump( $headers);
echo "----------------------------";
foreach ($records as $record) {
    dump( $record);
}


