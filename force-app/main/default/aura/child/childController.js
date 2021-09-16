({
    componentEventHandler : function(component, event, helper) {
        const childHandler = event.getName();
        console.log('grandchild event name: ' + childHandler + ', handled by: child component');
        
    }
})
