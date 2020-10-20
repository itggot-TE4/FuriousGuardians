require "base64"
Dotenv.load

class ApiHandler
  
  def self.format_repos(repos)
    repos.map {|repo| {full_name: repo["full_name"], name: repo["name"], forks_url: repo["forks_url"], forks_count: repo["forks_count"], html_url: repo["html_url"]} }
  end
  
  def self.call_gh_api(url)
    options = { headers: {Authorization: "token #{ENV['token']}"}}
    HTTParty.get(url, options)
end
 
def self.get_repos(user = "itggot")
  response = call_gh_api("https://api.github.com/users/#{user}/repos")
  
  
  response = format_repos(response)
end


def self.format_forks(forks)
  forks.map {|fork| {name: fork["full_name"], contents_url: fork["contents_url"], html_url: fork["html_url"]} }
end

def self.get_forks(user = "itggot", repo = "smallest_of_two")
  response = call_gh_api("https://api.github.com/repos/#{user}/#{repo}/forks")
  
  response = format_forks(response)
end


def self.str_to_hash(str)
  eval(str)
end

def self.decode_content(content)
  Base64.decode64(content)
end

def self.format_content(response)
  response = response["content"]
end


def self.get_repo_content(user = "itggot", repo = "smallest_of_two", file = ".manifest.json")
  response = call_gh_api("https://api.github.com/repos/#{user}/#{repo}/contents/#{file}")
  
  
  
  
  encoded_content = format_content(response)
  content = decode_content(encoded_content)
  
end


def self.get_manifest(user = "itggot", repo = "smallest_of_two")
  response = call_gh_api("https://api.github.com/repos/#{user}/#{repo}/contents/.manifest.json")
  
  
  
  
  
  encoded_content = format_content(response)
  content = decode_content(encoded_content)
  content = str_to_hash(content)
  
end


end

