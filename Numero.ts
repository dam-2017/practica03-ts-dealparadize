export class Numero{
    
    public static suma(n1, n2){
        return n1 + n2;
    }

    public static resta(n1, n2){
        return n1 - n2;
    }

    public static factorial(n1){
        var valor=1;
        for(var i=n1; i>1;i--){
            valor*=i;
        }
        return valor;
    }

    public static primo(n1){
        var valor=0;
        for(var i=2;i<=n1; i++){
            if(n1%i==0)
                valor++;
        }
        return valor==1;
    }
}