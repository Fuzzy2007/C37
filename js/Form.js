
class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1')
        title.html('carracing game')
        title.position(130,0)

        var input=createInput("name")
        var buttton=createButton("play")
        input.position(130,160)
        buttton.position(250,200)
        var greeting = createElement('h2')

        button.mousePressed(function(){
            input.hide();
            button.hide();
      
            var name = input.value();
            
           // playerCount+=1;
            //player.update(name)
            //player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("Hello " + name )
            greeting.position(130, 160)
          });
    }
}