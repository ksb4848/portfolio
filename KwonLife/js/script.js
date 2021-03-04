    import {Porfo} from './porfoscript.js';
    let x = 0;
    let linewidth = 0,
        lineheight = 0,
        linelength = 0;

    class Web {
        constructor() {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            } //새로고침시 스크롤 맨 위로 이동

            this.ele = document.querySelector('canvas');
            this.ctx = this.ele.getContext('2d');
            this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

            let Lifeele = {
                'secFirst': document.querySelector('.gnb_wrap > li'),
            };
            window.addEventListener('resize', this.resize.bind(this), false);
            this.resize();
            document.addEventListener('scroll', this.porfonav.bind(this), false);
            this.porfonav();
            Lifeele.secFirst.addEventListener('click', this.navClick.bind(this), false);
            this.navClick();


        }
        
        resize() {
            let Select = {
                'sec1': document.querySelector('.sec_01'),
                'firstT': document.querySelector('.first_txt'),
                'secondT': document.querySelector('.second_txt'),
                'firstH': document.querySelector('.first_txt').clientHeight,
                'secondH': document.querySelector('.second_txt').clientHeight,
            };

            this.stageWidth = document.querySelector('canvas').clientWidth;
            this.stageHeight = document.querySelector('canvas').clientHeight;
            
            this.ele.width = this.stageWidth * this.pixelRatio;
            this.ele.height = this.stageHeight * this.pixelRatio;

            this.ctx.scale(this.pixelRatio, this.pixelRatio);

            this.eleHeight = window.innerHeight;
            this.WrapWidth = this.stageWidth / 2;
            this.WrapHeight = this.stageHeight / 2;

            Select.sec1.style.height = (this.eleHeight * 2) + 'px';
            Select.firstT.style.top = ((this.eleHeight / 2) - (Select.firstH / 2)) + 'px';
            Select.secondT.style.top = ((this.eleHeight / 2) - (Select.secondH / 4)) + 'px';
            this.porfonav();
        }

        porfonav() {
            let ele = {
                'emailC': document.querySelector('.header_contents > .email_txt'),
                'headerAC': document.querySelector('.header_contents > .logo > a'),
                // about ele
                'aboutLeftImage': document.querySelector('.about_left > .my_photo > img'),
                'aboutLeftOutLine': document.querySelector('.about_left > .my_photo > .out_line'),
                'aboutLeftMainTxt': document.querySelector('.about_left > .main_title'),
                'aboutLeftSubTxt': document.querySelector('.about_left > .sub_txt'),
                'aboutLeftLine': document.querySelector('.sec_02 .line'),
                'aboutRightdiv': document.querySelector('.sec_02 .about_right > div'),
                'aboutRightP1': document.querySelector('.about_right > div > p:nth-child(2)'),
                'aboutRightP2': document.querySelector('.about_right > div > p:nth-child(3)'),
                // work ele
                'workLeft': document.querySelector('.work_left'),
                'yearWrap': document.querySelector('.year_wrap'),
                'workRight': document.querySelector('.work_right'),
                'skillBar': document.querySelector('.skill_bar_wrap'),
                // work ele inner skill
                'skillBarHtml': document.querySelector('.bar_html'),
                'skillBarCss': document.querySelector('.bar_css'),
                'skillBarJS': document.querySelector('.bar_js'),
                'skillBarJQ': document.querySelector('.bar_jq'),
                'skillBarPhp': document.querySelector('.bar_php'),
                'skillBarLinux': document.querySelector('.bar_li'),
                'skillBarDB': document.querySelector('.bar_db'),
                // porfo ele
                'sec04': document.querySelector('.sec_04'),
                'sec04Wrap': document.querySelector('.sec_04_wrap')

            },
            suci = {
                'ScrollY': window.scrollY,
                'ScrollInY': window.innerHeight,
                'ScrollWrap': document.body.clientHeight,
                'Opacity': (this.stageHeight) / 100,

                'firstTxt': document.querySelector('.first_txt'),
                'seconTxt': document.querySelector('.second_txt'),
                'seconTop': ((this.eleHeight / 2) - (document.querySelector('.second_txt').clientHeight / 4)),
 
                'sec01': document.querySelector('.sec_01').offsetTop,
                'sec02': document.querySelector('.sec_02').offsetTop,
                'sec03': document.querySelector('.sec_03').offsetTop,
                'sec04': document.querySelector('.sec_04').offsetTop,
                'sec05': document.querySelector('footer').offsetTop,
            },
            hab = {
                'firstgab': (suci.ScrollY * 500 / (suci.ScrollWrap - suci.ScrollInY * 100) + 1),
                'secondgab': (suci.ScrollY * 500 / (suci.ScrollWrap + suci.ScrollInY * 100)),
                'secondTopgab': (suci.ScrollY * 9000 / (suci.ScrollWrap + suci.ScrollInY * 10))
            }

            

            suci.firstTxt.style.opacity = hab.firstgab;
            if((suci.ScrollY * 500 / (suci.ScrollWrap - suci.ScrollInY * 100) + 1) >= 0) {
                suci.firstTxt.style.transform = 'scale(' + (suci.ScrollY * 500 / (suci.ScrollWrap - suci.ScrollInY * 100) + 1) + ')';
            } else {
                suci.firstTxt.style.transform = 'scale(0)';
            }
            
            if(suci.seconTop - hab.secondTopgab >= 0) {
                suci.seconTxt.style.top = suci.seconTop - hab.secondTopgab + 'px';
                console.log(suci.seconTop);
                console.log(hab.secondTopgab);
            }
            suci.seconTxt.style.opacity = hab.secondgab;

            let ul = document.getElementById('gnb_wrap2');
            let nav = {
                'scrolling': window.pageYOffset,
                'li': ul.getElementsByTagName('li'),
                'boxsec': document.getElementsByClassName('box')
            };

            let on = ul.getElementsByClassName('on');

            for(let j = 0; j < nav.li.length; j++) {
                if(suci.ScrollY <= suci.sec02 - 100) {
                    on[0].setAttribute('class', '');
                    nav.li[0].classList.add('on');
                    ele.emailC.style.color = '#fff';
                    ele.headerAC.style.color = '#fff';
                }
                // about effact
                if(suci.ScrollY >= suci.sec02 - 200 && suci.ScrollY <= suci.sec03 - 200) {
                    on[0].setAttribute('class', '');
                    nav.li[1].classList.add('on');
                    
                    ele.aboutLeftImage.style.transform = 'scale(1)';
                    setTimeout( function() {
                        ele.aboutLeftOutLine.style.opacity = '1';
                        ele.aboutLeftOutLine.style.top = '-25px';
                    }, 600);
                    setTimeout( function() {
                        ele.aboutLeftSubTxt.style.right = '0px';
                        ele.aboutRightdiv.style.left = '0px';
                        ele.aboutRightdiv.style.opacity = '1';
                    }, 800);
                    setTimeout( function() {
                        ele.aboutLeftMainTxt.style.opacity = '1';
                        ele.aboutLeftLine.style.width = '120px';
                        ele.aboutRightP1.style.height = '200px';
                        ele.aboutRightP2.style.width = '140px';
                    }, 1400);

                    if(suci.ScrollY >= suci.sec02 - 100 && suci.ScrollY <= suci.sec03 - 100) {
                        ele.emailC.style.color = '#333';
                        ele.headerAC.style.color = '#333';
                    }
                }
                // skill effact
                if(suci.ScrollY >= suci.sec03 - 200 && suci.ScrollY <= suci.sec04 - 200) {
                    on[0].setAttribute('class', '');
                    nav.li[2].classList.add('on');
                    
                    ele.workRight.style.opacity = '1';
                    setTimeout( function() {
                        ele.workLeft.style.left = '0px';
                        ele.workLeft.style.opacity = '1';
                        setTimeout( function() {
                            ele.yearWrap.style.top = '0px';
                            ele.yearWrap.style.opacity = '1';
                            ele.skillBar.style.top = '0px';
                            ele.skillBar.style.opacity = '1';
                            setTimeout( function() {
                                ele.skillBarHtml.style.width = '90%';
                                ele.skillBarCss.style.width = '90%';
                                ele.skillBarJS.style.width = '60%';
                                ele.skillBarJQ.style.width = '65%';
                                ele.skillBarPhp.style.width = '30%';
                                ele.skillBarLinux.style.width = '35%';
                                ele.skillBarDB.style.width = '10%';
                            },300)
                        },500);
                    },1000);
                }
                if(suci.ScrollY >= suci.sec04 - 200 && suci.ScrollY <= suci.sec05 - 200) {
                    on[0].setAttribute('class', '');
                    nav.li[3].classList.add('on');
                    if(suci.ScrollY >= suci.sec04 && suci.ScrollY <= suci.sec05) {
                        requestAnimationFrame(this.animate.bind(this));
                    }
                    
                }
                if(suci.ScrollY >= suci.sec05 - 600) {
                    on[0].setAttribute('class', '');
                    nav.li[4].classList.add('on');
                }
            }
            ele.sec04Wrap.style.top = (ele.sec04.clientHeight - ele.sec04Wrap.clientHeight) / 2 + 'px';

        }

        animate() {
            // let aniele = {
            //     'ScrollY': window.scrollY,
            //     'sec04': document.querySelector('.sec_04').offsetTop,
            // }
            // if(linelength <= 30) {
            //     requestAnimationFrame(this.animate.bind(this));
            //     linelength += 1;
            // } else {
            //     linelength = 0;
            // }
            // this.ctx.beginPath();
            // this.ctx.moveTo( 0 , (this.stageHeight / 30) * linelength );
            // this.ctx.lineTo( this.stageWidth / 30 * linelength, this.stageHeight );
            // this.ctx.lineTo( 0, this.stageHeight );
            // // this.ctx.lineWidth = 3;
            // this.ctx.fillStyle = '#52FF8E';
            // this.ctx.fill();

            // this.ctx.beginPath();
            // this.ctx.moveTo( this.stageWidth - (this.stageWidth / 30 * linelength) , 0 );
            // this.ctx.lineTo( this.stageWidth , this.stageHeight - ((this.stageHeight / 30) * linelength) );
            // this.ctx.lineTo( this.stageWidth , 0 );
            // // this.ctx.lineWidth = 3;
            // this.ctx.fillStyle = '#52c0ff';
            // this.ctx.fill();

        }

        navClick() {
            let ul = document.getElementById('gnb_wrap2'),
                on = ul.getElementsByClassName('on');
            let nav = {
                'scrolling': window.pageYOffset,
                'li': ul.getElementsByTagName('li'),
                'li2': ul.getElementsByTagName(':not(li)'),
                'boxsec': document.getElementsByClassName('box'),
            };
            for (let i = 0; i < nav.li.length; i++) {
                (function(idx) {
                    nav.li[idx].onclick = function() {
                        on[0].setAttribute('class', '');
                        let boxXY = nav.boxsec[idx].getBoundingClientRect();
                        let boxT = boxXY.top;
                        window.scrollBy({top: boxT, behavior: 'smooth'});
                        this.classList.add('on');
                    }
                })(i);
            }
        }
    }

    window.onload = () => {
        new Web();
        // new Porfo()
    }