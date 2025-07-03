"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import { Gamepad2, LogOut, Shield, Sparkles, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await authClient.getSession();
        if (session?.data?.user) {
          setUser(session.data.user);
        }
      } catch (error) {
        console.error("Erreur de session:", error);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    router.refresh();
  };

  const features = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Compétition Intense",
      description: "Affrontez des joueurs du monde entier dans des parties épiques"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Communauté Active",
      description: "Rejoignez des milliers de joueurs passionnés"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Jeu Sécurisé",
      description: "Système anti-triche et environnement protégé"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Mises à Jour Régulières",
      description: "Nouveau contenu et événements chaque semaine"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Narcotrafiquant</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <ModeToggle />
            {loading ? (
              <div className="h-10 w-20 bg-muted animate-pulse rounded"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Salut, {user.name || user.email}!</span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="outline">Connexion</Button>
                </Link>
                <Link href="/login">
                  <Button>Commencer à Jouer</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Plongez dans l'Univers Impitoyable du Crime Organisé
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Construisez votre empire, gérez vos territoires et devenez le baron de la drogue le plus redouté.
              Stratégie, alliances et trahisons vous attendent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Button size="lg" className="text-lg px-8">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  Jouer Maintenant
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button size="lg" className="text-lg px-8">
                      <Gamepad2 className="mr-2 h-5 w-5" />
                      Commencer l'Aventure
                    </Button>
                  </Link>
                  <Link href="/conditions">
                    <Button size="lg" variant="outline" className="text-lg px-8">
                      <Shield className="mr-2 h-5 w-5" />
                      Conditions du Jeu
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          <Separator className="mb-16" />

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Prêt à Conquérir les Rues ?</CardTitle>
              <CardDescription className="text-base">
                ⚠️ Ce jeu est destiné à un public adulte (18+) et contient des thèmes matures.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              {!user && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Créez votre compte gratuitement et commencez votre ascension vers le sommet du crime organisé.
                  </p>
                  <Link href="/login">
                    <Button size="lg" className="px-8">
                      Créer un Compte Gratuit
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Narcotrafiquant. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/conditions" className="text-sm text-muted-foreground hover:text-primary">
                Conditions du Jeu
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Support
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Discord
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
