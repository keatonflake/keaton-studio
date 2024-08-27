const page = () => {
  return (
    <div
      id="container"
      className="text-light flex-row w-1/2 m-auto text-center"
    >
      <h1 className="font-serif text-3xl">Milisan Roblox Code</h1>
      <h2 className="font-serif text-2xl">Week of August 26th</h2>
      <pre className=" text-white p-4 rounded text-left">
        <code>
          {`local coin = script.Parent
  
  coin.Touched:Connect(function(hit)
    if hit.Parent:FindFirstChild("Humanoid") then
      local player = game.Players:GetPlayerFromCharacter(hit.Parent)
      local randomNumber = math.random(5,10)
      
      player.leaderstats.Money.Value = player.leaderstats.Money.Value + randomNumber
      
      coin:Destroy()
    end
  end)`}
        </code>
      </pre>
    </div>
  );
};

export default page;
