%{
#include <stdio.h>

int nbr;   // Nombre jusqu'où calculer la somme
int sum = 0; // Variable pour stocker la somme
%}

%%
[0-9]+ {
    nbr = atoi(yytext); // Convertit le texte en entier pour obtenir la valeur de `nbr`
    for (int i = 0; i <= nbr; i++) { 
        sum += i; // Ajoute `i` à la somme
    }
    printf("Somme de la suite de 0 à %d : %d\n", nbr, sum);
    sum = 0; // Réinitialise la somme pour la prochaine entrée
}

. { printf("Autre caractère : %s\n", yytext); } // Gère les autres caractères
%%

int yywrap() {
    return 1;
}

int main(int argc, char **argv) {
    if (argc > 1)
        yyin = fopen(argv[1], "r");
    else
        yyin = stdin;

    yylex();
    return 0;
}