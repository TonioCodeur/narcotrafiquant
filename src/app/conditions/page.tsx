import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, ArrowLeft, Calendar, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function ConditionsPage() {
  const conditions = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Âge Requis",
      content: "Ce jeu est strictement réservé aux personnes âgées de 18 ans et plus. En créant un compte, vous certifiez avoir l'âge légal requis."
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Contenu Mature",
      content: "Narcotrafiquant contient des thèmes pour adultes incluant : violence simulée, références à des substances illicites, langage explicite et situations criminelles fictives."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Jeu Responsable",
      content: "Ce jeu est purement fictif et ne promeut en aucun cas les activités illégales. Nous encourageons un jeu responsable et modéré."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Temps de Jeu",
      content: "Nous recommandons de limiter vos sessions de jeu et de faire des pauses régulières. Le jeu ne doit pas interférer avec vos responsabilités quotidiennes."
    }
  ];

  const rules = [
    "Aucune forme de harcèlement, discrimination ou comportement toxique ne sera tolérée",
    "L'utilisation de logiciels de triche ou d'exploitation de bugs est strictement interdite",
    "Le commerce réel d'objets virtuels contre de l'argent réel est interdit",
    "Le partage de compte est interdit et peut entraîner une suspension",
    "Les noms d'utilisateur offensants ou inappropriés seront modifiés sans préavis",
    "Toute tentative de contournement des systèmes de sécurité entraînera un bannissement permanent"
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Conditions du Jeu</h1>
          <p className="text-xl text-muted-foreground">
            Veuillez lire attentivement ces conditions avant de jouer
          </p>
        </div>

        {/* Age Warning */}
        <Card className="mb-8 border-orange-500/50 bg-orange-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
              <AlertCircle className="h-5 w-5" />
              Avertissement Important
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">
              CE JEU EST RÉSERVÉ EXCLUSIVEMENT AUX ADULTES (18+)
            </p>
            <p className="text-sm text-muted-foreground">
              Narcotrafiquant est un jeu de simulation criminelle contenant des thèmes matures qui ne conviennent pas aux mineurs. 
              En accédant à ce jeu, vous confirmez avoir l'âge légal requis dans votre juridiction.
            </p>
          </CardContent>
        </Card>

        {/* Main Conditions */}
        <div className="space-y-6 mb-8">
          {conditions.map((condition, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="text-primary">{condition.icon}</div>
                  {condition.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{condition.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Game Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Règles de la Communauté</CardTitle>
            <CardDescription>
              Le non-respect de ces règles peut entraîner des sanctions allant jusqu'au bannissement permanent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Legal Disclaimer */}
        <Card>
          <CardHeader>
            <CardTitle>Avertissement Légal</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>
              Narcotrafiquant est un jeu de fiction. Toute ressemblance avec des personnes réelles, 
              vivantes ou décédées, ou avec des événements réels est purement fortuite.
            </p>
            <p>
              Ce jeu ne glorifie, ne promeut ni n'encourage aucune activité illégale. 
              Il s'agit d'une œuvre de divertissement destinée uniquement à un public adulte averti.
            </p>
            <p>
              En jouant à ce jeu, vous reconnaissez comprendre la différence entre la fiction et la réalité, 
              et vous vous engagez à ne pas reproduire les actions représentées dans le jeu dans la vie réelle.
            </p>
          </CardContent>
        </Card>

        {/* Accept Button */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            En créant un compte, vous acceptez ces conditions et confirmez avoir 18 ans ou plus.
          </p>
          <Link href="/login">
            <Button size="lg">
              J'ai 18 ans ou plus et j'accepte les conditions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}