function NameService () {
    const service = this;

    name = 'Null';
    
    service.setName = (nameInput) => {
        console.log("Saved");
        name = nameInput;
        return name;
    };

    service.getName = () => {
        return service.name;
    };
}

angular.module('NameApp')
.service('NameService', NameService)



