class TweetsController < ApplicationController
  before_action :set_tweet, only: [:show, :update, :destroy]
  before_action :authenticate_api_user!, only: [:show, :update, :destroy,]

  # get /tweets/:id/mytweet
  def mytweet
    user_id = params[:id]
    tweets = Tweet
      .joins(:user)
      .where(users: { id: user_id })
      .order(created_at: :desc)
      .select("tweets.id, content, users.id, name, nickname, tweets.created_at")

      render json: { data: tweets }
  end

  # GET /tweets
  # GET /tweets.json
  def index
    tweets = Tweet
      .joins(:user)
      .where(users: { id: 859673626 })
      .order(created_at: :desc)
      .select("tweets.id, content, users.id, name, nickname, tweets.created_at")

    render json: { data: tweets }
  end

  # GET /tweets/1
  # GET /tweets/1.json
  def show
    tweets = Tweet.order(created_at: :desc)
    render json: { data: tweets }
  end

  # POST /tweets
  # POST /tweets.json
  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      tweets = Tweet.joins(:user).order(created_at: :desc)
      render json: { data: tweets }
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tweets/1
  # PATCH/PUT /tweets/1.json
  def update
    if @tweet.update(tweet_params)
      render :show, status: :ok, location: @tweet
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tweets/1
  # DELETE /tweets/1.json
  def destroy
    @tweet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tweet
      @tweet = Tweet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tweet_params
      params.require(:tweet).permit(:user_id, :string, :content)
    end
end
