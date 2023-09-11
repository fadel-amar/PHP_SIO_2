<?php
namespace App;
use League\Csv\Reader;


class Championnat {

    private string $nom;
    // Association One to Many avec la class Equipe
    // Chaque élément du tableau est un objet(instance) de la classe Equipe
    /**
     * @ var Equipe[]
     */
    private array $equipes;

    /**
     * @param string $nom
     */
    public function __construct(string $nom)
    {
        $this->nom = $nom;
        $this->equipes = [];
    }

    /**
     * @return string
     */
    public function getNom(): string
    {
        return $this->nom;
    }

    /**
     * @return array
     */
    public function getEquipes(): array
    {
        return $this->equipes;
    }


    public function ajouterEquipe (Equipe $equipe) : void {
        $this->equipes[] = $equipe;
    }



    public function getNombreEquipes (): int {
        return count($this->equipes);
    }

    public function ChargerEquipe($file): void {
        $csv = Reader::createFromPath($file)->setHeaderOffset(0);
        foreach ($csv->getRecords() as $record ) {
            $this->equipes[] = new Equipe($record['nom equipe'],$record['entraineur'], $record['annee']);
        }


}


}