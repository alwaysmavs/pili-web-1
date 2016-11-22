import React, {Component} from 'react';
import {render} from 'react-dom';
class About extends Component {


    componentDidMount() {


        var SEPARATION = 40, AMOUNTX = 130, AMOUNTY = 35;

        var container;
        var camera, scene, renderer;


        var particles, particle, count = 0;


        init();
        animate();

        function init() {

            container = document.createElement('div');
            document.getElementById("about-canvas").appendChild(container);
            console.log(document.body)
            if (container) {
                container.className += container.className ? ' waves' : 'waves';
            }

            camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.y = 150; //changes how far back you can see i.e the particles towards horizon
            camera.position.z = 300; //This is how close or far the particles are seen

            camera.rotation.x = 0.35;

            scene = new THREE.Scene();

            particles = new Array();

            var PI2 = Math.PI * 2;
            var material = new THREE.SpriteCanvasMaterial({

                color: 0x939393, //changes color of particles
                program: function (context) {

                    context.beginPath();
                    context.arc(0, 0, 0.1, 0, PI2, true);
                    context.fill();

                }

            });

            var i = 0;

            for (var ix = 0; ix < AMOUNTX; ix++) {

                for (var iy = 0; iy < AMOUNTY; iy++) {

                    particle = particles[i++] = new THREE.Sprite(material);
                    particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                    particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
                    scene.add(particle);

                }

            }

            renderer = new THREE.CanvasRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0xffffff, 1);
            container.appendChild(renderer.domElement);

            window.addEventListener('resize', onWindowResize, false);

        }

        function onWindowResize() {


            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        function animate() {

            requestAnimationFrame(animate);

            render();

        }

        function render() {

            var i = 0;

            for (var ix = 0; ix < AMOUNTX; ix++) {

                for (var iy = 0; iy < AMOUNTY; iy++) {

                    particle = particles[i++];
                    particle.position.y = ( Math.sin(( ix + count ) * 0.5) * 20 ) + ( Math.sin(( iy + count ) * 0.5) * 20 );
                    particle.scale.x = particle.scale.y = ( Math.sin(( ix + count ) * 0.3) + 2 ) * 4 + ( Math.sin(( iy + count ) * 0.5) + 1 ) * 4;

                }

            }

            renderer.render(scene, camera);

            // This increases or decreases speed
            count += 0.2;

        }
    }

    render() {
        return (
            <div className="about-outbox">
                <div className="about-part1">
                    <div className="about-part1-title">让实时连接更简单</div>
                    <div className="about-part1-inner">
                        正因为实时的连接，让人类的时空界限变得越来越小，<br/>
                        改善了人与人相处的方式，<br/>
                        这便是我们在做的事。
                    </div>
                    <div className="about-part1-img" id="about-canvas">

                    </div>
                </div>
                <div className="about-part2-bg">
                    <div className="about-part2">
                        <div className="about-part2-title">团队</div>
                        <div className="about-part2-inner">
                            Pili 让直播通信更便捷地应用在人们日常使用的喜爱产品之上，我们每天帮助处在世界各地<br/>
                            的直播产品企业或者团队处理上亿的直播讯息。
                        </div>
                        <div className="about-part2-member">
                            <div className="about-part2-memberbox">
                                <div className="about-part2-imgbox">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/xuli.png"/>
                                </div>
                                <div className="about-part2-member-name">XU Li</div>
                                <div className="about-part2-member-title">Product Owner</div>
                            </div>

                            <div className="about-part2-memberbox">
                                <div className="about-part2-imgbox">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/xuli.png"/>
                                </div>
                                <div className="about-part2-member-name">XU Li</div>
                                <div className="about-part2-member-title">Product Owner</div>
                            </div>

                            <div className="about-part2-memberbox">
                                <div className="about-part2-imgbox">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/xuli.png"/>
                                </div>
                                <div className="about-part2-member-name">XU Li</div>
                                <div className="about-part2-member-title">Product Owner</div>
                            </div>

                            <div className="about-part2-memberbox">
                                <div className="about-part2-imgbox">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/xuli.png"/>
                                </div>
                                <div className="about-part2-member-name">XU Li</div>
                                <div className="about-part2-member-title">Product Owner</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-part3">

                </div>
            </div>
        )
    }
}


export default About;