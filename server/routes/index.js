import postController from './posts';

export default (app)=>{
    app.use('api/posts/', postController);

}
