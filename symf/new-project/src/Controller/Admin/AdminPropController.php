<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\PropertyRepository;
use App\Entity\Property;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\PropertyType;
use Doctrine\ORM\EntityManagerInterface;

class AdminPropController extends AbstractController
{   
    private $repo;
    private $em;
    
    public function __construct(PropertyRepository $repo, EntityManagerInterface $em)
    {
        $this->repo=$repo;
        $this->em = $em;
    }
    /**
     * @Route("/admin", name="admin.property.index")
     */
    public function index(): Response
    {
        $properties = $this->repo->findAll();
        return $this->render('admin/properties/index.html.twig', [
            'properties' => $properties
        ]);
    }

    /**
     * @Route("/admin/edit/{id}", name="admin.property.edit")
     * @param Property $property
     */
    public function edit(Property $property, Request $req): Response
    {   
        $form = $this->createForm(PropertyType::class,$property);
        $form->handleRequest($req);

        if($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            $this->addFlash('success','Propriété éditée avec succès');
            return $this->redirectToRoute('admin.property.index');
        }

        return $this->render('admin/properties/edit.html.twig', [
            'prop' => $property,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/create", name="admin.property.create")
     * @param Property $property
     */
    public function create(Request $req): Response
    {   
        $property = new Property();
        $form = $this->createForm(PropertyType::class,$property);
        $form->handleRequest($req);

        if($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($property);
            $this->em->flush();
            $this->addFlash('success','Propriété créée avec succès');
            return $this->redirectToRoute('admin.property.index');
        }

        return $this->render('admin/properties/create.html.twig', [
            'prop' => $property,
            'form' => $form->createView()
        ]);
    }
    
    /**
     * @Route("admin/delete/{id}", name="admin.property.delete")
     */
    public function delete(Property $property): Response
    {
        $this->em->remove($property);
        $this->em->flush();
        $this->addFlash('success','Propriété supprimée avec succès');
        return $this->redirectToRoute('admin.property.index');
    }

    /**
     * @Route("admin/property/{id}", name="admin.property.see")
     */
    public function see(Property $property): Response
    {
        return $this->render('admin/properties/see.html.twig',[
            'prop' => $property
        ]);
    }
}