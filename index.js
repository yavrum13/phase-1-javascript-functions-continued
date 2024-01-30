// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapping){
    function result(emphatic){
        let wrapping = '';
        switch(emphatic){
            case 'a hard worker':
                wrapping = '*';
                emphatic = 'a hard worker';
                break;
            case 'a dedicated programmer':
                wrapping = '||';
                emphatic = 'a dedicated programmer';
                break;
            default:
                wrapping = '';
                emphatic = 'special';
                break;
        }
        return `You are ${wrapping}${emphatic}${wrapping}!`;
    }
    return result;

}