console.info(AFRAME.version, AFRAME.THREE.REVISION);

AFRAME.registerSystem('_boot', {
  init() {
    console.log('init AFRAME');
    this.el.addEventListener('model-loaded', e => {
      const suzanneEntity = document.getElementById('suzanneEntity');
      console.log(suzanneEntity);
      const suzanneMesh = suzanneEntity.getObject3D('mesh'); // THREE.Mesh
      console.debug(suzanneMesh);
      const suzanne = suzanneMesh.getObjectByName('Suzanne');
      suzanne.material.color.setHex(0xFF0000);
      this.suzanne = suzanne;
    })
  },
  tick(time) {
    if (this.suzanne) {
      this.suzanne.rotateX(.05 * Math.random());
      this.suzanne.rotateY(.05 * Math.random() * -1);
      this.suzanne.rotateZ(.05 * Math.random());
    }
  }
})