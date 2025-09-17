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

function TipsApp() {
  try {
    const tipCategories = [
      {
        title: "Basic Techniques",
        icon: "gamepad-2",
        tips: [
          {
            title: "Paddle Positioning",
            description: "Keep your paddle centered and ready to move in either direction. Anticipate where the ball will land rather than reacting after it bounces."
          },
          {
            title: "Launch Angle Control",
            description: "When launching the ball, aim for the corners of the block formation to create cascading breaks and chain reactions."
          },
          {
            title: "Steady Rhythm",
            description: "Maintain smooth, controlled movements. Jerky paddle movements often lead to missed returns and poor angle control."
          }
        ]
      },
      {
        title: "Advanced Strategies",
        icon: "target",
        tips: [
          {
            title: "Corner Block Priority",
            description: "Target corner blocks first as they're hardest to reach later. This prevents getting stuck with isolated blocks that are difficult to hit."
          },
          {
            title: "Angle Manipulation",
            description: "Use different parts of your paddle to control ball direction. Edge hits create sharp angles, center hits go straight up."
          },
          {
            title: "Pattern Recognition",
            description: "Learn common block patterns and develop specific strategies for each layout. Some formations require systematic approaches."
          }
        ]
      },
      {
        title: "Power-Up Mastery",
        icon: "zap",
        tips: [
          {
            title: "Multi-Ball Management",
            description: "When you have multiple balls, focus on keeping at least one in play. Don't try to track all balls simultaneously - prioritize the lowest one."
          },
          {
            title: "Laser Timing",
            description: "Use laser power-ups strategically to clear difficult blocks, but don't become so focused on shooting that you miss ball returns."
          },
          {
            title: "Extended Paddle Benefits",
            description: "Larger paddles give more control over ball angles. Use this advantage to set up precise shots and improve your success rate."
          }
        ]
      },
      {
        title: "Scoring Optimization",
        icon: "trophy",
        tips: [
          {
            title: "Block Value Strategy",
            description: "Different colored blocks have different point values. Red blocks typically offer the highest scores, so prioritize them when possible."
          },
          {
            title: "Combo Multipliers",
            description: "Chain consecutive block breaks to build up score multipliers. Plan your shots to create cascading effects."
          },
          {
            title: "Power-Up Bonuses",
            description: "Collecting power-ups often provides bonus points in addition to their effects. Don't ignore them even if you don't need the power-up."
          }
        ]
      }
    ];

    const proTips = [
      "Practice makes perfect - spend time in easier levels perfecting your paddle control",
      "Watch the ball's trajectory pattern to predict its next bounce location",
      "Don't panic when the ball speed increases - maintain your rhythm and focus",
      "Use the walls strategically to reach blocks that seem impossible to hit directly",
      "Save difficult corner blocks for last when you have more space to maneuver",
      "Learn to play without looking directly at the paddle - focus on the ball instead"
    ];

    return (
      <div className="min-h-screen" data-name="tips-app" data-file="tips-app.js">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-[var(--text-primary)] mb-6">
              Block Breaker Tips & Strategies
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Master the game with expert techniques, advanced strategies, and pro tips that will take your block breaking skills to the next level.
            </p>
            <button 
              onClick={() => window.location.href = 'index.html'}
              className="btn-primary text-lg px-8 py-4"
            >
              Practice These Tips Now
            </button>
          </div>
        </section>

        {/* Tips Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {tipCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="section-card">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-4">
                      <div className={`icon-${category.icon} text-xl text-white`}></div>
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="tip-card">
                        <h3 className="font-semibold mb-2 text-[var(--primary-color)]">{tip.title}</h3>
                        <p className="text-[var(--text-secondary)]">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="py-16 bg-[var(--bg-light)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
                Professional Player Secrets
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                These advanced insights from expert players will give you the competitive edge you need to dominate any block breaker challenge.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proTips.map((tip, index) => (
                <div key={index} className="tip-card text-center">
                  <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-[var(--text-secondary)]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Quick Reference Guide</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="section-card text-center">
                  <div className="icon-keyboard text-3xl text-[var(--primary-color)] mb-4"></div>
                  <h3 className="text-xl font-semibold mb-3">Controls</h3>
                  <ul className="text-[var(--text-secondary)] space-y-2">
                    <li>Arrow Keys: Move paddle</li>
                    <li>A/D Keys: Alternative movement</li>
                    <li>Spacebar: Launch ball</li>
                  </ul>
                </div>
                
                <div className="section-card text-center">
                  <div className="icon-star text-3xl text-[var(--accent-color)] mb-4"></div>
                  <h3 className="text-xl font-semibold mb-3">Scoring</h3>
                  <ul className="text-[var(--text-secondary)] space-y-2">
                    <li>Red blocks: 60 points</li>
                    <li>Orange blocks: 50 points</li>
                    <li>Yellow blocks: 40 points</li>
                    <li>Green blocks: 30 points</li>
                  </ul>
                </div>
                
                <div className="section-card text-center">
                  <div className="icon-zap text-3xl text-[var(--secondary-color)] mb-4"></div>
                  <h3 className="text-xl font-semibold mb-3">Power-Ups</h3>
                  <ul className="text-[var(--text-secondary)] space-y-2">
                    <li>Multi-ball: Extra balls</li>
                    <li>Extended: Longer paddle</li>
                    <li>Laser: Shoot blocks</li>
                    <li>Slow: Reduced ball speed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('TipsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <TipsApp />
  </ErrorBoundary>
);