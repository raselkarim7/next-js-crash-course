import Feed from '@components/Feed'


const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
          <h1 className='head_text text-centre'>
            Discover & Share
            {/* <br children="max-md:hidden" /> */}
            <span className='orange_gradient text-centre'>AI-Powered Prompts</span>
          </h1>
          <p className='desc text-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis error ducimus accusamus alias quae facere corrupti necessitatibus hic, debitis ipsa!

          </p>
          <Feed />
        </section>
    );
};

export default Home;