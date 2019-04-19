function NameForm(NameService) {
    const ctrl = this;

    ctrl.setName = (nameInput) => {
        NameService.setName(nameInput);
    }

}



angular
.module('NameApp')
.component('nameForm', {
    template: `
    <input type=text placeholder=Name ng-model="$ctrl.nameInput">
    <button ng-click="$ctrl.setName($ctrl.nameInput)">Save</button>
    `,
    controller: NameService,

});
  
