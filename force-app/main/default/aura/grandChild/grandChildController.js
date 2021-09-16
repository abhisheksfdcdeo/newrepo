({
    onclick : function(component, event, helper) {
        const evt = component.getEvent("componentEventBubble");
        evt.fire();
        console.log('component evet fired');    
    }
})
