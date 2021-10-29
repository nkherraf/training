<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Twig\Environment;
use App\Entity\Property;
use App\Repository\PropertyRepository;
use Doctrine\ORM\EntityManagerInterface;

class PropertyController extends AbstractController
{   
    private $repo;
    private $em;

    public function __construct(PropertyRepository $repo,EntityManagerInterface $em) {
        $this->repo = $repo;
        $this->em = $em;
    }


    /**
     * @Route("/properties/", name="property.index")
     */
    public function index(): Response
    {   
        $props = $this->repo->findAll();
        return $this->render('properties/property.php.twig', [
            'properties' => $props
        ]);
    }

    /**
     * @Route("/properties/{id}", name="property.show")
     */
    public function show($id): Response
    {   
        $theprop = $this->repo->find($id);
        return $this->render('properties/showid.php.twig',[
            'theproperty' => $theprop
        ]);
    }
}