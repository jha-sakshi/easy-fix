import { Label, MiniContainer } from './components';
import { Filter, Header, Issues } from './containers';

const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-[1.25fr_3fr]'>
          <aside className='pt-5 space-y-5 md:pr-5 md:border-r border-dark-3'>
            <MiniContainer title='about'>
              The perfect place to find{' '}
              <span className='text-accent'>easy-to-fix</span> issues. Goal is
              to encourage people to start contributing to the open source
              community.
            </MiniContainer>
            <Filter />
          </aside>
          <Issues />
        </div>
      </main>
    </>
  );
};

export default App;
