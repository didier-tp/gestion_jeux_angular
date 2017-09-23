export class ClientData {
    public prenom: string;
    public nom: string;
    public mail: string;
    public telephone: string;
}

export class LoginData {

public login: string;
public motDePasse: string;
}

export class AdresseData {
        public rue: string;
        public codePostal: string;
        public ville: string;
    }

export class CompteData {
            public client: ClientData;
            public login: LoginData;
            public adresse: AdresseData;
}