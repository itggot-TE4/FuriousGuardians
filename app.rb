class Server < Sinatra::Base
    get '/' do
        slim :index
      
    end

    get '/api/repos/:user' do
        user = params["user"]
        ApiHandler.get_repos(user).to_json
    end
    get '/api/forks/:user/:repo' do
        user = params["user"]
        repo = params["repo"]
        ApiHandler.get_forks(user, repo).to_json
    end
    get '/api/content/:user/:repo/.manifest.json' do
        user = params["user"]
        repo = params["repo"]
        ApiHandler.get_manifest(user, repo).to_json
    end
    get '/api/content/:user/:repo/:file' do
        user = params["user"]
        repo = params["repo"]
        file = params["file"]
        ApiHandler.get_repo_content(user, repo, "#{file}")
    end
    get '/api/content/:user/:repo/:file/:path' do
        user = params["user"]
        repo = params["repo"]
        file = params["file"]
        path = params["path"]

        ApiHandler.get_repo_content(user, repo, "#{file}/#{path}")
    end




  end