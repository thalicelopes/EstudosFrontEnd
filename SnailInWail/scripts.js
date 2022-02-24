function validar(id) {
    var days = 0;
    var count = 0;
    while(id>0){
        if((days + 7) >= id){
            count++;
            break;
        }
        count++;
        days+=5;
    }
    document.write("A cobra vai demorar " + count, " dias para chegar ao topo do buraco.");
}