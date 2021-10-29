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

class IndexController extends AbstractController
{   
    private $repo;
    private $em;

    public function __construct(PropertyRepository $repo,EntityManagerInterface $em) {
        $this->repo = $repo;
        $this->em = $em;
    }

    /**
     * @Route("/", name="home")
     */
    public function helloWord(Request $request): Response
    {
        $prop = $this->repo->findAll();
        return $this->render('pages/index.php.twig', [
            'properties' => $prop
        ]);
    }
}
?>