import demo from './assets/3dRendererDemo.mp4'
import './DemoViewer.css'
export default function DemoViewer() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="demoHeader">Live Demo of 3D Renderer</h1>
      <p><b>Note:</b> The rendering of the cube is not fully correct. It is rendered as 6 faces formed of triangles, not squares. The sphere rendering is not implemented</p>
      <p><a href="/">Back to Main Page</a></p>
      <video 
        controls 
        style={{ maxWidth: '50%', height: 'auto' }} 
        src={demo}
        alt="3D Renderer Demo"
      >
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
}
