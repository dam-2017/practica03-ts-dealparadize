export class Cadena{
    cadena : string;
    private array : Array<string>;

    constructor(cad : string){
        this.cadena = cad.trim();
        this.array = this.cadena.toLowerCase().split("");
    }

    set setCadena(cad : string){
        this.cadena = cad.trim();
        this.array = this.cadena.toLowerCase().split("");
    }

    get getEsPalindromo() : boolean{
        for(var i=0;i<this.array.length;i++)
        {
            if(this.array[i]!=this.array[this.array.length-1-i])
              return false;
        }
        return true;
    }

    get getNumeroLetras(): number{
        var count=0;
        this.array.forEach(function(item){
            if(item!=" ")
                count++;
        });
        return count;
    }

    get getNumeroPalabras() : number{
         var count=this.array.length>0?1:0;
        this.array.forEach(function(item){            
            if(item==" ")
                count++;
        });
        return count;
    }

    get getNumeroVocales():string{
        var count = new Array(0,0,0,0,0);
        this.array.forEach(function(item){
            switch(item){
                case "a":                
                count[0]++;
                break;
                case "e":
                count[1]++;
                break;
                case "i":
                count[2]++;
                break;
                case "o":
                count[3]++;
                break;
                case "u":
                count[4]++;
                break;
            }
        });
        return "Cantidad de Vocales "+
        "\n a:"+count[0]+
        "\n e:"+count[1]+
        "\n i:"+count[2]+
        "\n o:"+count[3]+
        "\n u:"+count[4];
    }
}