function Vector3(){
    this.x = 0;
    this.y = 0;
    this.z = 0;

    this.ToString = function () {
        return "(" + this.x + ";" + this.y + ";" + this.z + ")";
    }

    this.Length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    this.Normalize = function () {
        var VectorLength = this.Length();
        var NormalizedVector = new Vector3();

        NormalizedVector.x = this.x / VectorLength;
        NormalizedVector.y = this.y / VectorLength;
        NormalizedVector.z = this.z / VectorLength;

        return NormalizedVector;
    }
}

function Vector2(){
    this.x = 0;
    this.y = 0;

    this.ToString = function () {
        return "(" + this.x + ";" + this.y + ")";
    }

    this.Length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    this.Normalize = function () {
        var VectorLength = this.Length();
        var NormalizedVector = new Vector2();

        NormalizedVector.x = this.x / VectorLength;
        NormalizedVector.y = this.y / VectorLength;

        return NormalizedVector;
    }
}

function Transform(){
    this.Position = new Vector3();
    this.Rotation = new Vector3();
    this.Escale = new Vector3();
}
