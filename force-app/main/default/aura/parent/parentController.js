({
    componentEventHandler : function(component, event, helper) {
        const parentHandler = event.getName();
        console.log('grandchild event name: ' + parentHandler + ', handled by: parent component');
        event.pause();
    }
})
