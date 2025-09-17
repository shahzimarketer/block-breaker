class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function BlogApp() {
  try {
    const blogPosts = [
      {
        id: 1,
        title: "The Complete History of Block Breaker Games",
        excerpt: "Discover the fascinating evolution of block breaker games from Atari's Breakout to modern variations. Learn about the pioneers who shaped this iconic arcade genre.",
        date: "January 15, 2025",
        readTime: "8 min read",
        category: "History",
        content: `Block breaker games have a rich history dating back to the 1970s. The genre began with Atari's Breakout, designed by Nolan Bushnell and Steve Bristow. The game was revolutionary for its time, introducing the concept of destroying targets with a bouncing ball controlled by a paddle.

        The original Breakout was created as a single-player version of Pong, but it quickly became its own phenomenon. Steve Jobs and Steve Wozniak famously worked on an early version of the game, with Wozniak designing the hardware in just four days.

        Throughout the 1980s and 1990s, the genre evolved with games like Arkanoid, which introduced power-ups and more complex level designs. These innovations became standard features that we still see in modern block breaker games today.

        The transition to digital platforms brought new possibilities, allowing for more creative block arrangements, special effects, and gameplay mechanics that weren't possible in the original arcade machines.`
      },
      {
        id: 2,
        title: "Master Your Paddle Control: Advanced Techniques",
        excerpt: "Take your block breaker skills to the next level with these expert paddle control techniques. Learn how angle manipulation can dramatically improve your game performance.",
        date: "January 12, 2025",
        readTime: "5 min read",
        category: "Strategy",
        content: `Paddle control is the foundation of becoming a skilled block breaker player. The key to mastering paddle control lies in understanding how different parts of the paddle affect the ball's trajectory.

        When the ball hits the center of your paddle, it will bounce straight up or at a very slight angle. However, when it hits the edges, it will bounce at much sharper angles. This principle is crucial for strategic gameplay.

        Advanced players use this technique to their advantage by positioning themselves to hit specific blocks or to set up combination shots. By deliberately hitting the ball with different parts of the paddle, you can control where it goes next.

        Practice moving your paddle smoothly and consistently. Jerky movements often lead to missed returns or poor angle control. The best players develop a rhythm and can predict where they need to position their paddle well before the ball arrives.

        Remember that patience is key. Sometimes it's better to set up a good angle for your next shot rather than trying to hit the nearest block immediately.`
      },
      {
        id: 3,
        title: "Power-Up Strategies: When to Catch and When to Avoid",
        excerpt: "Not all power-ups are created equal! Learn which power-ups to prioritize and which ones might actually hurt your progress in challenging situations.",
        date: "January 10, 2025",
        readTime: "6 min read",
        category: "Tips",
        content: `Power-ups can make or break your game performance, but knowing when to catch them and when to let them fall is a skill that separates good players from great ones.

        Multi-ball power-ups are generally excellent to catch, as they significantly increase your block-breaking potential. However, be prepared for the increased difficulty of tracking multiple balls simultaneously.

        Extended paddle power-ups are almost always beneficial, making it easier to return the ball and giving you more control over angles. There's rarely a situation where you wouldn't want a larger paddle.

        Speed power-ups can be double-edged. While they can help clear blocks faster, they also make the game more challenging to control. Consider your current skill level and the complexity of the remaining blocks before catching these.

        Laser paddle power-ups allow you to shoot directly at blocks, but remember that you still need to keep the ball in play. Don't become so focused on using the laser that you miss returning the ball.

        The key is situational awareness. If you're struggling to keep the ball in play, prioritize power-ups that make the game easier to control rather than those that increase speed or complexity.`
      }
    ];

    return (
      <div className="min-h-screen" data-name="blog-app" data-file="blog-app.js">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-[var(--text-primary)] mb-6">
              Block Breaker Gaming Blog
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Discover expert strategies, gaming history, and insider tips to master the art of block breaking games.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                        <span className="text-[var(--text-secondary)] text-sm">{post.date}</span>
                        <span className="text-[var(--text-secondary)] text-sm">{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="prose prose-gray max-w-none">
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                          {post.content.substring(0, 300)}...
                        </p>
                      </div>
                      
                      <div className="mt-6">
                        <button className="text-[var(--primary-color)] font-semibold hover:text-[var(--secondary-color)] transition-colors">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="section-card">
                  <h3 className="text-xl font-bold mb-4">Popular Categories</h3>
                  <div className="space-y-3">
                    {['Strategy', 'Tips', 'History', 'Reviews', 'Tutorials'].map((category) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-[var(--text-secondary)]">{category}</span>
                        <span className="bg-[var(--bg-light)] px-2 py-1 rounded text-sm">
                          {Math.floor(Math.random() * 10) + 3}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section-card">
                  <h3 className="text-xl font-bold mb-4">Quick Tips</h3>
                  <ul className="space-y-3 text-[var(--text-secondary)]">
                    <li>• Use paddle edges for sharp angles</li>
                    <li>• Target corner blocks first</li>
                    <li>• Save power-ups for difficult sections</li>
                    <li>• Practice smooth paddle movements</li>
                    <li>• Focus on ball prediction</li>
                  </ul>
                </div>

                <div className="section-card text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to Play?</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Put these strategies into practice!
                  </p>
                  <button 
                    onClick={() => window.location.href = 'index.html'}
                    className="btn-primary w-full"
                  >
                    Play Block Breaker
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('BlogApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <BlogApp />
  </ErrorBoundary>
);