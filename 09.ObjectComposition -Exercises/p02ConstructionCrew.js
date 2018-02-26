function solve(worker) {

    if(worker.handShaking){

        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handShaking = false;
    }

    return worker;
}