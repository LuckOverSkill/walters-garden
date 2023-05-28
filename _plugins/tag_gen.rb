module Jekyll
    class TagPageGenerator < Generator
      safe true
  
      def generate(site)
        if site.layouts.key? 'tagpage'
          dir = 'tag'
          site.tags.each_key do |tag|
            site.pages << TagPage.new(site, site.source, File.join(dir, tag), tag)
          end
        end
      end
    end
  
    class TagPage < Page
      def initialize(site, base, dir, tag)
        @site = site
        @base = base
        @dir = dir
        @name = 'index.html'
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'tagpage.html')
        self.data['tag'] = tag
        self.data['title'] = "Posts Tagged &ldquo;"+tag+"&rdquo;"
      end
    end
  end
  