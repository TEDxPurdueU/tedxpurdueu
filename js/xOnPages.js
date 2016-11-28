// depending on the page's length
// randomly rotate and place x's in either '.right' or '.left' and '.dropping-x' configuration inside 'body > .page-decoration'

(function(){

    const BODY_HEIGHT = document.body.getBoundingClientRect().height;
    const WINDOW_HEIGHT = window.innerHeight;
    const X_COUNT = Math.floor(BODY_HEIGHT / WINDOW_HEIGHT) - 1;

    const $container = $('.page-decoration');

    const randomPositions = new Array(X_COUNT).map(each => {
        return {
            angle: `${Math.floor(Math.random() * 180) - 90}deg`,
            top: `${Math.floor(Math.random() * WINDOW_HEIGHT) + WINDOW_HEIGHT * i}px`,
            class: Math.random() < .5 ? '.left' : '.right'
        };
    }).forEach(positionData => {
        // position and apppend things
        const xString = `
          <div class=".dropping-x ${positionData.class}" style="top: ${positionData.top}; transform: rotate(${positionData.angle});">
          </div>
        `;

        $container.append(xString);
    });

})();
