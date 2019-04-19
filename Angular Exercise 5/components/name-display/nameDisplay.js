function NameDisplay(NameService) {
    const ctrl = this;

    ctrl.displayName = () => {
        ctrl.nameInput = NameService.getName();
    };

}


angular
.module('NameApp')
.component('nameDisplay', NameDisplay); {
    template: `
    <div>
    {{$ctrl.nameInput}}
    <button ng-click="$ctrl.displayList();">Load</button>
    </div>
    `,

    controller; NameDisplay,

});
  
