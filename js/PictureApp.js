/* globals PictureViewer, pictures */
/* exported PictureApp */

const appTemplate = document.getElementById('app-template');

class PictureApp {
    constructor() {
        this.pictures = pictures;
        this.totalCount = parseInt(window.localStorage.getItem('totalCount'));
    }

    render() {
        const dom = appTemplate.content;

        const pictureViewerSection = dom.getElementById('picture-viewer');
        const pictureViewerComponent = new PictureViewer(this.pictures, (picture) => {
            picture.selectCount++;
            this.totalCount++; // put it in where it's happening!
            if(this.totalCount > 9) {
                pictureViewerComponent.stop();
            }
            else {
                pictureViewerComponent.update(picture);
            }
        });
        const pictureDom = pictureViewerComponent.render();
        pictureViewerSection.appendChild(pictureDom);

        return dom;
    }
}