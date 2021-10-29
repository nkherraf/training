<?php

namespace App\Form;

use App\Entity\Property;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class PropertyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('surface')
            ->add('rooms')
            ->add('bedrooms')
            ->add('floor')
            ->add('price')
            ->add('heat',ChoiceType::class,[
                'label' => 'Type de chauffage',
                'choices' => [
                    'Electricité' => 0,
                    'Gaz' => 1,
                    'Solaire' => 2
                ]
            ])
            ->add('city')
            ->add('zipcode')
            ->add('solded',ChoiceType::class,[
                'label' => 'Vendu ?',
                'choices' => [
                    'Non' => 0,
                    'Oui' => 1
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Property::class,
        ]);
    }
}
