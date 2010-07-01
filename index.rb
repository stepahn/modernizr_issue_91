require 'rubygems'
require 'sinatra'
require 'pathname'

get '*' do
  p = Pathname.new(__FILE__).dirname
  send_file p.join('public', 'index.html')
end

get '*' do
  p = Pathname.new(__FILE__).dirname
  send_file p.join('public', params[:splat].first)
end

