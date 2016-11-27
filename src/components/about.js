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
                        <div className="about-part2-line">
                            <div className="about-part2-left">关于我们</div>
                            <div className="about-part2-right">
                                <div className="about-part2-inner">
                                    Pili 让直播通信更便捷地应用在人们日常使用的喜爱产品之上，我们每天帮助处在世界各地的直播产品企业或者团队处理上亿的直播讯息。
                                </div>
                                <div className="about-part2-link">
                                    <div>团队博客</div>
                                    <div>联系我们</div>
                                </div>
                            </div>
                        </div>
                        <div className="about-part2-line">
                            <div className="about-part2-left">品牌资源</div>
                            <div className="about-part2-right">
                                <div className="about-part2-inner">
                                    我们虽然是一个极小的团队，但我们认同设计是直播一整套系统最重要的部分之一。
                                </div>
                                <div className="about-part2-link2">
                                    <div>下载品牌 Logo</div>
                                    <div>产品宣传册</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;