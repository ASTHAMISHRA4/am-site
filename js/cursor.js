let magnetCurs = [];

magnetCurs.init = function (params) {
    if (!params) {
        params = {};
    }
    magnetCurs.cursor = document.getElementById('cursor');
    magnetCurs.cursor.style.position = "fixed"
    magnetCurs.cursor.style.pointerEvents = "none"
    
    if (params.pointer) {
        magnetCurs.pointar = document.getElementById('pointer');
        magnetCurs.pointar.style.position = "fixed"
        magnetCurs.pointar.style.pointerEvents = "none"
    }
    magnetCurs.targetable_list = document.getElementsByClassName('targetable');

    magnetCurs.moveEnable = true;

    document.addEventListener('mousemove', function (e) {
        if (magnetCurs.moveEnable) {
            magnetCurs.cursor.style.left = e.clientX + 'px';
            magnetCurs.cursor.style.top = e.clientY + 'px';
            magnetCurs.cursor.style.transform = "";
        } else {
            if (params.shockable) {
                let intensity = 5;
                if (typeof params.shockable == 'number') {
                    if(params.shockable > 0 && params.shockable < 5 ){
                        intensity = intensity - params.shockable;
                    }else{
                        magnetCurs.error("spacing params need to be more than 0");
                    }
                }else{
                    magnetCurs.error("shockable params need to be a number");
                }
                magnetCurs.cursor.style.transform = "translate(" + e.movementX / intensity + "px, " + e.movementY / intensity + "px)";
            }
        }
        if (params.pointer) {
            magnetCurs.pointar.style.left = e.clientX + 'px';
            magnetCurs.pointar.style.top = e.clientY + 'px';
        }
    });


    for (let index = 0; index < magnetCurs.targetable_list.length; index++) {

        const element = magnetCurs.targetable_list[index];

        element.addEventListener('mouseenter', function (e) {
            magnetCurs.moveEnable = false;
            magnetCurs.cursor.classList.add('magnet');
            let currentButton = e.currentTarget;
            
            let cssProperty = [];
            if(currentButton.classList.contains('clickable'))
            {
                magnetCurs.moveEnable = true;
                magnetCurs.cursor.style.visibility = "hidden";
                magnetCurs.pointar.style.width = '70px';
                magnetCurs.pointar.style.height = '70px';
                magnetCurs.pointar.style.margin = "-30px";
                magnetCurs.pointar.style.borderWidth = "0px";
                magnetCurs.pointar.style.backgroundColor  = 'rgb(40, 140, 108,0.3)';
            }
            else{
                if(currentButton.classList.contains('circle'))
                {
                    magnetCurs.cursor.style.borderRadius = '50%';
                    cssProperty.width = currentButton.offsetWidth - 20;
                    cssProperty.height = currentButton.offsetHeight - 20;
                    cssProperty.left = currentButton.getBoundingClientRect().x + 10;
                    cssProperty.top = currentButton.getBoundingClientRect().y + 10;
                }
                else if(currentButton.classList.contains('round')){
                    magnetCurs.cursor.style.borderRadius = "20%";
                    cssProperty.width = currentButton.offsetWidth;
                    cssProperty.height = currentButton.offsetHeight;
                    cssProperty.left = currentButton.getBoundingClientRect().x;
                    cssProperty.top = currentButton.getBoundingClientRect().y;
                }
                else{
                    magnetCurs.cursor.style.borderRadius = "0";
                    cssProperty.width = currentButton.offsetWidth;
                    cssProperty.height = currentButton.offsetHeight;
                    cssProperty.left = currentButton.getBoundingClientRect().x;
                    cssProperty.top = currentButton.getBoundingClientRect().y;
                }
                
                magnetCurs.cursor.style.left = cssProperty.left + 'px';
                magnetCurs.cursor.style.top = cssProperty.top + 'px';
                magnetCurs.cursor.style.width = cssProperty.width + 'px';
                magnetCurs.cursor.style.height = cssProperty.height + 'px';
                magnetCurs.cursor.style.margin = "0";
            }
        });
        element.addEventListener('mouseleave', function (e) {
            magnetCurs.moveEnable = true;
            magnetCurs.cursor.classList.remove('magnet');

            magnetCurs.cursor.style.width = '';
            magnetCurs.cursor.style.height = '';
            magnetCurs.cursor.style.margin = '';
            magnetCurs.cursor.style.borderRadius = '';
            
            magnetCurs.cursor.style.visibility = "visible";
             magnetCurs.pointar.style.width = '';
            magnetCurs.pointar.style.height = '';
            magnetCurs.pointar.style.margin = "";
            magnetCurs.pointar.style.borderWidth = "";
            magnetCurs.pointar.style.backgroundColor  = '';
        });
    }


    //DONE with params
    if (params.click) {
        document.addEventListener('click', function (e) {
            let time = 700;
            if (typeof params.click == 'number') {
                if(params.click > 0){
                    time = params.click;
                }else{
                    magnetCurs.error("click params need to be more than 0");
                }
            }else{
                magnetCurs.error("click params need to be a number");
            }
            magnetCurs.cursor.style.animation = "cursorClick " + time + "ms";
            setTimeout(() => {
                magnetCurs.cursor.style.animation = "";
            }, time);
        });
    }
}
magnetCurs.error = function (string) {
    console.error('Magnetic Cursor : '+string);
}