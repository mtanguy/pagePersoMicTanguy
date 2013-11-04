  var renderer, scene, camera, mesh;

 

  function init(){
      // on initialise le moteur de rendu
      renderer = new THREE.WebGLRenderer();

      // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas � la place
      // renderer = new THREE.CanvasRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.getElementById('container_3D_animate').appendChild(renderer.domElement);

      // on initialise la sc�ne
      scene = new THREE.Scene();

      // on initialise la camera que l�on place ensuite sur la sc�ne
      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.set(0, 0, 1000);
      scene.add(camera);
      
      // on cr�� un  cube au quel on d�finie un mat�riau puis on l�ajoute � la sc�ne 
      var geometry = new THREE.CubeGeometry( 200, 200, 200 );
      var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      // on effectue le rendu de la sc�ne
      renderer.render( scene, camera );
  }