const page = () => {
  return (
    <div
      id="container"
      className="text-light flex-row h-max m-auto text-center p-4"
    >
      <h1 className="font-serif text-3xl">Milisan Roblox Code</h1>
      <h2 className="font-serif text-2xl">Week of August 26th</h2>
      <pre className=" text-white p-4 rounded text-left">
        <code>
          {`local coin = script.Parent

coin. Touched:Connect(function(hit)
	if hit.Parent:FindFirstChild("Humanoid") then
		local player = game.Players:GetPlayerFromCharacter(hit.Parent)
		local randomNumber = math.random(5,10)
		
		player.leaderstats.Money.Value = player.leaderstats.Money.Value + randomNumber
		
		coin:Destroy()
	end
end)
`}
        </code>
      </pre>

      <pre className=" text-white p-4 rounded text-left">
        <code>
          {`game.Players.PlayerAdded:Connect(function(plr)
	local leaderstats = Instance.new("Folder", plr)
	leaderstats.Name = "leaderstats"

	local Money = Instance.new("IntValue", leaderstats)
	Money.Name = "Money"
end)

`}
        </code>
      </pre>

      <pre className=" text-white p-4 rounded text-left">
        <code>
          {`local coin = game.ServerStorage.coin -- Path to coin
while true do
	local clone = coin:Clone()
	clone.Parent = game.Workspace
	clone.Position = Vector3.new(math.random(-100, 100), 2.834, math.random(-100, 100))
	wait(math.random(1, 3))
end

`}
        </code>
      </pre>
    </div>
  );
};

export default page;
