import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Blocks, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">
              Developer Tools v1.0
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Build Faster.{" "}
            <span className="text-primary">Code Smarter.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A complete suite of developer tools designed to streamline your workflow
            and boost productivity.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Documentation
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl border bg-card"
          >
            <Terminal className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">CLI Tools</h3>
            <p className="text-muted-foreground">
              Powerful command-line interfaces for rapid development and deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl border bg-card"
          >
            <Code2 className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Code Generation</h3>
            <p className="text-muted-foreground">
              Automated code generation tools to speed up development process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-xl border bg-card"
          >
            <Cpu className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">API Testing</h3>
            <p className="text-muted-foreground">
              Comprehensive API testing suite with real-time monitoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-xl border bg-card"
          >
            <Blocks className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integrations</h3>
            <p className="text-muted-foreground">
              Seamless integration with your favorite development tools.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Code Preview Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-xl border bg-card p-6 overflow-hidden"
        >
          <pre className="text-sm font-mono p-4 rounded bg-muted overflow-x-auto">
            <code>{`// Example Code
import { DevTools } from '@devtools/core';

const tools = new DevTools({
  project: 'my-awesome-app',
  mode: 'development'
});

tools.init().then(() => {
  console.log('🚀 DevTools initialized successfully!');
});`}</code>
          </pre>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-4xl font-bold text-primary mb-2">10x</div>
            <div className="text-muted-foreground">Faster Development</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Active Users</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            © 2024 DevTools. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;